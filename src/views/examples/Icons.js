
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Box from '@mui/material/Box';
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

const Icons = () => {
  const [copiedText, setCopiedText] = useState();


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [addboy,setaddboy]=useState
    ({
    boyname:"",
    boylocation:"",
    boynumber:""
    })



  
  console.log(addboy);
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
               
                 <Form.Group className='mt-5' controlId="validationFormik01">
                                    <Form.Control style={{borderRadius:'10px'}} type="text" placeholder='Enter name' value={addboy.boyname} onChange={(e)=>setaddboy({...addboy,boyname:e.target.value})} />
                                    </Form.Group>
                                
                            <Form.Group className='mt-3' controlId="validationFormik01">
                            <Form.Control style={{borderRadius:'10px'}} type="text" placeholder='Enter  location' value={addboy.boylocation} onChange={(e)=>setaddboy({...addboy,boylocation:e.target.value})} />
                            </Form.Group>
                            <Form.Group className='mt-3' controlId="validationFormik01">
                            <Form.Control style={{borderRadius:'10px'}} type="number" placeholder='Enter Phone number' value={addboy.boynumber} onChange={(e)=>setaddboy({...addboy,boynumber:e.target.value})} />
                            </Form.Group>
                        
                            <Box  sx={{ minWidth: 120 }} style={{borderRadius:'10px'}} className='mt-4'>
      <FormControl  >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Status : 
        </InputLabel>
        <NativeSelect className="mt-3"
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          
        >
          
          <option value={10}>Active</option>
          <option value={20}>Inactive</option>
          
        </NativeSelect>
      </FormControl>
    </Box>
    <center> <Button  className="mt-4" variant="primary">ADD</Button></center>




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
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        
            <td><i onClick={handleShow} class="fa-solid fa-pen-to-square"></i></td>
            
            <tr> <Button style={{padding:'2px'}} className="mt-2" variant="danger">Block</Button></tr>
            <td><i class="fa-solid fa-trash" Style="color:rgb(245, 54, 92);"></i></td>


  
        
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><i onClick={handleShow} class="fa-solid fa-pen-to-square"></i></td>
          <tr> <Button style={{padding:'2px'}} className="mt-2 " variant="danger">Block</Button></tr>
          <td><i class="fa-solid fa-trash" Style="color: rgb(245, 54, 92);"></i></td>

        </tr>
        
      </tbody>
    </Table>
          </div>
        </Row>



       
      </Container>
      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
        <Form.Group className='mt-5' controlId="validationFormik01">
                                    <Form.Control style={{borderRadius:'10px'}} type="text" placeholder='Enter name' />
                                    </Form.Group>
                                
                            <Form.Group className='mt-3' controlId="validationFormik01">
                            <Form.Control style={{borderRadius:'10px'}} type="text" placeholder='Enter  location' />
                            </Form.Group>
                            <Form.Group className='mt-3' controlId="validationFormik01">
                            <Form.Control style={{borderRadius:'10px'}} type="number" placeholder='Enter Phone number' />
                            </Form.Group>
                            <Box  sx={{ minWidth: 120 }} style={{borderRadius:'10px'}} className='mt-4'>
      <FormControl  >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Status : 
        </InputLabel>
        <NativeSelect className="mt-3"
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          
        >
          
          <option value={10}>Active</option>
          <option value={20}>Inactive</option>
          
        </NativeSelect>
      </FormControl>
    </Box>





        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Icons;
