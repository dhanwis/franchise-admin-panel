import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { editdeliveryboyAPI } from 'Services/allAPI';
import { addpetresponsecontext } from './ContextShare';
import Swal from 'sweetalert2';




function Edit({candy}) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [information,setinformation]=useState({
        id:candy._id,
        boyname:candy.boyname,
        boylocation:candy.boylocation,
        boynumber:candy.boynumber,
        // status:candy.status,
       
      })
      console.log(information);


      const{addpetresponse,setaddpetresponse}=useContext(addpetresponsecontext)


      // const handleStatusChange = (event) => {
      //   const selectedStatus = event.target.value; // Get the selected value
      //   setinformation({...information, status: selectedStatus}); // Update the status property in the state
      // };


      const handleupdate=async()=>{
        const {id,boyname,boylocation,boynumber}= information
        if(!boyname || !boylocation || !boynumber){
          alert('please fill the form completely')
        }
        else{
          const reqbody= new FormData()
          reqbody.append("boyname",boyname)
          reqbody.append("boylocation",boylocation)
          reqbody.append("boynumber",boynumber)
          // reqbody.append("status",status)

        
         
          
    
          const reqheader={
            "Content-Type":"application/json",
       
      
        }
        const result=await editdeliveryboyAPI(id,reqbody,reqheader)
        console.log(result);
        if(result.status===200){
          Swal.fire({
            icon:'success',
            title: 'Updated Successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          
         
          handleClose()
          setaddpetresponse(result.data)
         
      
        }
        else{
          console.log(result.response.data);
        }
        
      
      
      
      }
       }
    
    
  

  return (
    <div>
        <i onClick={handleShow} class="fa-solid fa-pen-to-square"></i>

<Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
        <Form.Group className='mt-5' controlId="validationFormik01">
                                    <Form.Control style={{borderRadius:'10px'}} type="text" placeholder='Enter name'  value={information.boyname} onChange={(e)=>setinformation({...information,boyname:e.target.value})} />
                                    </Form.Group>
                                
                            <Form.Group className='mt-3' controlId="validationFormik01">
                            <Form.Control style={{borderRadius:'10px'}} type="text" placeholder='Enter  location'  value={information.boylocation} onChange={(e)=>setinformation({...information,boylocation:e.target.value})} />
                            </Form.Group>
                            <Form.Group className='mt-3' controlId="validationFormik01">
                            <Form.Control style={{borderRadius:'10px'}} type="number" placeholder='Enter Phone number'  value={information.boynumber} onChange={(e)=>setinformation({...information,boynumber:e.target.value})} />
                            </Form.Group>
                            <Box  sx={{ minWidth: 120 }} style={{borderRadius:'10px'}} className='mt-4'>
                            <FormControl className="mt-4">
      {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Status:
      </InputLabel>
      
      <NativeSelect
        className="mt-5"
        value={information.status} // Set the selected value
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
    </Box>





        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default Edit