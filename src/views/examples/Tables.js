import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Demo from "./Demo";
import { useContext, useEffect, useState } from "react";
import { addRestaurantAPI } from "Services/allAPI";
import Swal from "sweetalert2";
import { getallRestaurantAPI } from "Services/allAPI";
import { BASE_URL } from "Services/baseUrl";
import { addpetresponsecontext } from "./ContextShare";


import exampleImage from 'images/pngegg.png';

const Tables = () => {

const [addRestaurant,setAddRestaurants]=useState({
  resname:"",
  reslocation:"",
  resaddress:"",
  resphone:"",
  restime:"",
  resimage:""




})
console.log(addRestaurant);
const [preview,setpreview]=useState("")
console.log(preview);
const{addpetresponse,setaddpetresponse}=useContext(addpetresponsecontext)




useEffect(()=>{
  if(addRestaurant.resimage)
  {(setpreview(URL.createObjectURL(addRestaurant.resimage)))}
  else{
    setpreview("")
  }


},[addRestaurant.resimage])


const handleaddRestaurant=async(e)=>{
  e.preventDefault()
  const { resname,reslocation, resaddress, resphone,restime, resimage}=addRestaurant

  if( !resname ||
    !reslocation ||
    !resaddress ||
    !resphone ||
    !restime ||
    !resimage
   ){
      alert('please fill the for completely')
    }
    else{
      // reqbody
      const reqbody=new FormData()

      reqbody.append("resname",resname)
      reqbody.append("reslocation",reslocation)
      reqbody.append("resaddress",resaddress)
      reqbody.append("resphone",resphone)
      reqbody.append("restime",restime)
      reqbody.append("resimage",resimage)
     

// reheader

const reqheader={
  "Content-Type":"multipart/form-data"
 

}




      const result=await addRestaurantAPI(reqbody,reqheader)
      console.log(result);
      if(result.status===200){
        Swal.fire({
          icon:'success',
          title: 'Restaurant Added Successfully',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        setAddRestaurants({
          resname:"",
          reslocation:"",
          resaddress:"",
          resphone:"",
          restime:"",
          resimage:""
   
        })
      }
    
      
    }

  }

  const [viewRestaurant,setviewRestaurant]=useState([])


  const gethomeRestaurant=async()=>{
    const result= await getallRestaurantAPI()
    console.log(result.data);
    setviewRestaurant(result.data)

    

  }
useEffect(()=>{
    gethomeRestaurant()
  },[addpetresponse])



  
  return (
    <>
      <Header />
     
      <Container className="mt--7" fluid>
       
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Add Restaurants</h3>
              </CardHeader>

              <Container className="mb-5">
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
      
      setAddRestaurants({ ...addRestaurant, resimage: file }); // Assuming you have a state variable 'addRestaurant' and a setter function 'setAddRestaurant' to update it
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
   <img width={'250x'} 
    height={'210px'}    src={preview ? preview : exampleImage} alt="Example" />
</label>
           </center>
          
                <Form.Group className="mt-5" controlId="validationFormik01">
                  <Form.Control
                    style={{ borderRadius: "10px" }}
                    type="text"
                    placeholder="Name"
                    value={addRestaurant.resname}
                    onChange={(e)=>setAddRestaurants({...addRestaurant,resname:e.target.value})}

                  />
                </Form.Group>

                <Form.Group className="mt-3" controlId="validationFormik01">
                  <Form.Control
                    style={{ borderRadius: "10px" }}
                    type="text"
                    placeholder="Location"
                    value={addRestaurant.reslocation}
                    onChange={(e)=>setAddRestaurants({...addRestaurant,reslocation:e.target.value})}
                  />
                  
                </Form.Group>
                <Form.Group className="mt-3" controlId="validationFormik01">
                  <Form.Control
                    style={{ borderRadius: "10px" }}
                    type="text"
                    placeholder="Address"
                    value={addRestaurant.resaddress}
                    onChange={(e)=>setAddRestaurants({...addRestaurant,resaddress:e.target.value})}

                  />
                  
                </Form.Group>
                <Form.Group className="mt-3" controlId="validationFormik01">
                  <Form.Control
                    style={{ borderRadius: "10px" }}
                    type="number"
                    placeholder="Phone number"
                    value={addRestaurant.resphone}
                    onChange={(e)=>setAddRestaurants({...addRestaurant,resphone:e.target.value})}
                  />
                </Form.Group>
                <Form.Group className="mt-3" controlId="validationFormik01">
                  <Form.Control
                    style={{ borderRadius: "10px" }}
                    type="text"
                    placeholder="Working Time"
                    value={addRestaurant.restime}
                    onChange={(e)=>setAddRestaurants({...addRestaurant,restime:e.target.value})}
                  />
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button 
                    className="mt-3"
                    color="primary"
                    href="#pablo"
                    onClick={handleaddRestaurant}
                    size="md"
                  >
                    Add
                  </Button>
                </div>
              </Container>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Our Restaurants</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">location</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Image</th>
                    <th scope="col">Working Time</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                 {
                  viewRestaurant?.length>0?
                  viewRestaurant.map((item)=>(

                  
                 
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                       
                        <Media>
                          <span className="mb-0 text-sm">
                            {item.resname}
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>{item.reslocation}</td>
                    <td>
                  
                        <i className="bg-warning" />
                        {item.resaddress}
                    
                    </td>
                    <td>
                 
                        <i className="bg-warning" />
                        {item.resphone}
                      
                      
                    </td>
                    <td>
                    <div className="avatar-group">
  <div
    className="avatar avatar-sm rounded-circle"
    style={{
      width: '50px',
      height: '50px',
      backgroundImage: `url(${BASE_URL}/restaurantimages/${item.resimage})`,
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
                      <Demo comp={item} />
                    </td>
                  </tr>
                  ))
                :null}
                
                 
                
                 
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
