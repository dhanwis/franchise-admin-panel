



import { useContext, useEffect, useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { ToastContainer, toast } from 'react-toastify';



// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Media,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { adddeliveryboyAPI } from "Services/allAPI";
import { deliverboyAPI } from "Services/allAPI";
import { deletedeliveryboyAPI } from "Services/allAPI";
import Edit from "./Edit";
import { editdeliveryboyAPI } from "Services/allAPI";
import { addpetresponsecontext } from "./ContextShare";
import Swal from "sweetalert2";
import { BASE_URL } from "Services/baseUrl";
import Demo from "./Demo";
import { BlockAPI } from "Services/allAPI";
import myImage from 'images/pngegg.png';

const Icons = () => {
  const [copiedText, setCopiedText] = useState();


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [addboy,setaddboy]=useState
    ({
    boyname:"",
    boylocation:"",
    boynumber:"",
    devimage:""
    // status:""
    })

    const [preview,setpreview]=useState("")

    const [loading, setLoading] = useState(false);

    const handleBlock = async (boyId) => {
      setLoading(true);
      try {
        await BlockAPI(boyId);
        // Handle success, update UI if necessary
        console.log('Delivery boy blocked successfully');
      } catch (error) {
        console.error('Error blocking delivery boy:', error);
        // Handle error, show error message to user
      } finally {
        setLoading(false);
      }
    };


    // const handleStatusChange = (event) => {
    //   const selectedStatus = event.target.value; // Get the selected value
    //   setaddboy({...addboy, status: selectedStatus}); // Update the status property in the state
    // };
  

    const{addpetresponse,setaddpetresponse}=useContext(addpetresponsecontext)




    
    const [validated, setValidated] = useState(false);


    const [getBoys,setgetBoys]=useState([])

    const [updateboyy, setupdateboyy] = useState([]);




  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setaddboy({ ...addboy, [name]: value });
  };


  
// add delivery boys
  const handleadd = async (e) => {
    e.preventDefault();
  
    const { boyname, boylocation, boynumber,devimage} = addboy;
  
    if (!boyname || !boylocation || !boynumber ) {
    
      Swal.fire({
        title: "Please fill the form completely",
      
        icon: "warning",
        
      })
      
      
    } else {
      const reqbody = new FormData();
  
      reqbody.append("boyname", boyname);
      reqbody.append("boylocation", boylocation);
      reqbody.append("boynumber", boynumber);
      reqbody.append("devimage", devimage);
      // reqbody.append("status", status);
  
      const reqheader = {
        "Content-Type":"multipart/form-data"
      };
  
      const result = await adddeliveryboyAPI(reqbody, reqheader);
      console.log(result);
      if (result.status === 200) {
        console.log(result.data);
        Swal.fire({
          icon:'success',
          title: 'Deliveryboy added Successfully',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  
       
        setgetBoys((prevBoys) => [...prevBoys, result.data]);
      } else {
        alert(result.response.data);
      }
      setaddboy({
      boyname:"",
      boylocation:"",
      boynumber:"",
      devimage:""
      // status:""
      })
    }
  };
  


      const seeboy=async()=>{
        const result= await deliverboyAPI()
        console.log(result.data);
        setgetBoys(result.data)
        
    
      }



  
  console.log(addboy);

  const editgetdeliveryboy = async () => {
       
    const reqheader = {
      'Content-Type': 'application/json',
      
    };
    const result = await editdeliveryboyAPI(reqheader);
    setupdateboyy(result.data);
  };


// delete delivery boy
const handledelete = async (id) => {
  const reqheader = {
    'Content-Type': 'application/json',
  };

  try {
    const result = await deletedeliveryboyAPI(id, reqheader);
    if (result.status === 200) {
     
      setgetBoys(prevBoys => prevBoys.filter(boy => boy._id !== id));
     
    } else {
      console.log(result.response.data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


  useEffect(()=>{
    seeboy()
    editgetdeliveryboy()
  },[addpetresponse])

  
useEffect(()=>{
  if(addboy.devimage)
  {(setpreview(URL.createObjectURL(addboy.devimage)))}
  else{
    setpreview("")
  }


},[addboy.devimage])


  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Add Delivery boy</h3>

              </CardHeader>
              <CardBody>

                
              <center>
              <label>
  <input 
    type="file" 
    style={{ display: 'none' }} 
    onChange={(e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setpreview(reader.result); // Assuming you have a state variable 'preview' and a setter function 'setPreview' to update it
      };
      
      reader.readAsDataURL(file);
      
      setaddboy({ ...addboy, devimage: file }); // Assuming you have a state variable 'addRestaurant' and a setter function 'setAddRestaurant' to update it
    }} 
  />
  {/* target.files are used to access a file or image. */}
  {/* <img 
    width={'250x'} 
    height={'200px'} 
    src={preview ? preview : "http://cdn.onlinewebfonts.com/svg/img_94880.png"} 
    className='justify-content-center' 
    alt="" 
  /> */}
   <img  width={'250x'}
      height={'210px'}
      src={preview ? preview : myImage} // Use myImage variable here
      alt="Example" />
</label>
           </center>
              <Form className="mt-4" noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="validationFormik01">
                    <Form.Control
                      style={{ borderRadius: '10px' }}
                      type="text"
                      placeholder="Enter name"
                      name="boyname"
                      value={addboy.boyname}
                      onChange={handleInputChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Name is required</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormik02" className='mt-4'>
                    <Form.Control
                      style={{ borderRadius: '10px' }}
                      type="text"
                      placeholder="Enter location"
                      name="boylocation"
                      value={addboy.boylocation}
                      onChange={handleInputChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Location is required</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormik03" className='mt-4'>
                    <Form.Control
                      style={{ borderRadius: '10px' }}
                      type="number"
                      placeholder="Enter Phone number"
                      name="boynumber"
                      value={addboy.boynumber}
                      onChange={handleInputChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Phone number is required</Form.Control.Feedback>
                  </Form.Group>

                  <FormControl className="mt-4">
      {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Status:
      </InputLabel>
      
      <NativeSelect
        className="mt-5"
        value={addboy.status} // Set the selected value
        onChange={handleStatusChange}
        inputProps={{
          name: 'status',
          id: 'uncontrolled-native',
        }}
      >
        <option value="">Select status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </NativeSelect> */}
    </FormControl>
                
                  <center>
                    <Button onClick={handleadd} type="submit" className="mt-4" variant="primary">ADD</Button>
                  </center>
                </Form>





              </CardBody>
            </Card>

          <h3 className="mt-5">Delivery boy List</h3>
            <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">deliveryboys</h3>
              </CardHeader>
              <Table 
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">location</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Image</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                 {
                  getBoys?.length>0?
                  getBoys.map((item)=>(

                  
                 
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                       
                        <Media>
                          <span className="mb-0 text-sm">
                            {item.boyname}
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>{item.boylocation}</td>
                  
                    <td>
                 
                        <i className="bg-warning" />
                        {item.boynumber}
                      
                      
                    </td>
                    <td>
                    <div className="avatar-group">
  <div
    className="avatar avatar-sm rounded-circle"
    style={{
      width: '50px',
      height: '50px',
      backgroundImage: `url(${BASE_URL}/deliveryboyimages/${item.devimage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  ></div>
</div>

                    </td>
                       <td>{item.restime}</td>
                    <td className="text-right">
                      {/* <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                        <Link to="/demo">
                          <DropdownItem
                            href="#pablo"
                            // onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          </Link>
                          
                        </DropdownMenu>
                      </UncontrolledDropdown> */}
                      <Edit candy={item} />
                    </td>
                    <td> <Button
                  onClick={() => handleBlock(item._id)}
                  disabled={loading}
                  style={{
                    padding: '2px',
                    backgroundColor: 'rgb(220, 35, 67)',
                    borderColor: 'rgb(220, 35, 67)',
                  }}
                  className="mt-2"
                >
                  Block
                </Button></td>
                    <td><i onClick={() => handledelete(item._id)} class="fa-solid fa-trash"></i></td>
                  </tr>
                  ))
                :null}
                
                 
                
                 
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
          </div>
        </Row>



       
      </Container>
      
    </>
  );
};

export default Icons;
