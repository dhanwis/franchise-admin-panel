



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



// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
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
    // status:""
    })

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
  
    const { boyname, boylocation, boynumber} = addboy;
  
    if (!boyname || !boylocation || !boynumber ) {
      alert("Please fill the form completely");
    } else {
      const reqbody = new FormData();
  
      reqbody.append("boyname", boyname);
      reqbody.append("boylocation", boylocation);
      reqbody.append("boynumber", boynumber);
      // reqbody.append("status", status);
  
      const reqheader = {
        "Content-Type": "application/json",
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
              <center> <img width={'180px'} height={'200px'} src="http://cdn.onlinewebfonts.com/svg/img_94880.png" className=' justify-content-center' alt=""  /></center>

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
            <Table className="mt-4"  bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Location</th>
          <th>Phone Number</th>
          {/* <th>Status</th> */}

          <th></th>
          
        </tr>
      </thead>
      <tbody>


       {
        getBoys?.length>0?
        getBoys.map((item)=>(
       
       <tr>
          <td>1</td>
          <td>{item.boyname}</td>
          <td>{item.boylocation}</td>
          <td>{item.boynumber}</td>
          {/* <td>{item.status}</td> */}
        
            <td>  <Edit candy={item}/> </td>
            
            <tr> <Button style={{padding:'2px'}} className="mt-2" variant="danger">Block</Button></tr>
            <td><i onClick={()=>handledelete(item._id)} class="fa-solid fa-trash" Style="color:rgb(245, 54, 92);"></i></td>


  
        
        </tr>
        )):
        null
       }
      </tbody>
    </Table>
          </div>
        </Row>



       
      </Container>
      
    </>
  );
};

export default Icons;
