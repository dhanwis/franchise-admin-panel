import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updateRestaurantAPI } from 'Services/allAPI';
import { BASE_URL } from 'Services/baseUrl';
import { addpetresponsecontext } from './ContextShare';


function Demo({comp}) {



    
    //  const [show, setShow] = useState(false);
    // const [formData, setFormData] = useState({
    //     name: '',
    //     location: '',
    //     phoneNumber: '',
    //     workingTime: ''
    // });
    // const [errors, setErrors] = useState({});

    // const handleClose = () => setShow(false);
    //  const handleShow = () => setShow(true);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // const handleSubmit = () => {
    //     const newErrors = {};
    //     if (!formData.name) {
    //         newErrors.name = 'Name is required';
    //     }
    //     if (!formData.location) {
    //         newErrors.location = 'Location is required';
    //     }
    //     if (!formData.phoneNumber) {
    //         newErrors.phoneNumber = 'Phone number is required';
    //     }
    //     if (!formData.workingTime) {
    //         newErrors.workingTime = 'Working Time is required';
    //     }

    //     if (Object.keys(newErrors).length > 0) {
    //         setErrors(newErrors);
    //     } else {
    //         // Form submission logic goes here
    //         console.log('Form submitted:', formData);
    //         handleClose();
    //     }
    // };

    const [preview,setpreview]=useState("")
    const [show, setShow] = useState(false);
    const handleClose = () =>{ setShow(false);


  
      handleClose1()}
  
      const handleShow = () => setShow(true);

      const{addpetresponse,setaddpetresponse}=useContext(addpetresponsecontext)

  
      const [companion,setcompanion]=useState({
        id:comp._id,
        resname:comp.resname,
        reslocation:comp.reslocation,
        resaddress:comp.resaddress,
        resphone:comp.resphone,
        restime:comp.restime,
        resimage:""
        
     })
  
     console.log(companion);
  
  
     useEffect(()=>{
      if(companion.resimage){
        setpreview(URL.createObjectURL(companion.resimage))
     
  
    }
  },[companion.resimage])
  
  const handleClose1=()=>{
    setcompanion({
        id:comp._id,
        resname:comp.resname,
        reslocation:comp.reslocation,
        resaddress:comp.resaddress,
        resphone:comp.resphone,
        restime:comp.restime,
        resimage:""
        
    })
    setpreview("")
  }
  
  
  
   const handleupdate=async()=>{
    const {id,resname,reslocation,resaddress,resphone,restime,resimage}= companion
    if(!resname || !reslocation || !resaddress || !resphone || !restime){
      alert('please fill the form completely')
    }
    else{
      const reqbody= new FormData()
      reqbody.append("resname",resname)
      reqbody.append("reslocation",reslocation)
      reqbody.append("resaddress",resaddress)
      reqbody.append("resphone",resphone)
      reqbody.append("restime",restime)
    
    
      preview?reqbody.append("resimage",resimage):reqbody.append("resimage",comp.resimage)
      
  
  
  
    
    // const token=sessionStorage.getItem("token")
  
    if(preview){
      const reqheader={
        "Content-Type":"multipart/form-data",
   
  
      } 
  
      const result=await updateRestaurantAPI(id,reqbody,reqheader)
      console.log(result);
      if(result.status===200){
        Swal.fire({
          icon: 'success',
          title: 'Updated Successfully',
         
        })
        handleClose()
        setaddpetresponse(result.data)
        
      }
      else{
  
  
        console.log(result.response.data);
      }
    }
    else{
      const reqheader={
        "Content-Type":"application/json",
  
  
    }
    const result=await updateRestaurantAPI(id,reqbody,reqheader)
    console.log(result);
    if(result.status===200){
      Swal.fire({
        icon: 'success',
        title: 'Updated Successfully',
       
      })
      handleClose()
      setaddpetresponse(result.data)
        
      
  
    }
    else{
      console.log(result.response.data);
    }
    
  
  
  }
  }
   }
   
  
      
  
      
      
  
      
      
  
     
  

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
            <label htmlFor="imag" className='mt-4'>
       <input id='imag' type="file" style={{display:'none'}}  onChange={(e)=>setcompanion({...companion,resimage:e.target.files[0]})}/>
<center><img className='' src={preview?preview:`${BASE_URL}/restaurantimages/${comp.resimage}`} alt=""  width={'250px'} height={'160px'} /></center></label>

                <Modal.Body>
                    <Form.Group className='mt-5' controlId="validationFormik01">
                        <Form.Control
                            style={{ borderRadius: '10px' }}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={companion.resname}
                            onChange={(e)=>setcompanion({...companion,resname:e.target.value})}

                            // value={formData.name}
                            // onChange={handleChange}
                            // isInvalid={!!errors.name}
                        />
                        {/* <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback> */}
                    </Form.Group>

                    <Form.Group className='mt-3' controlId="validationFormik02">
                        <Form.Control
                            style={{ borderRadius: '10px' }}
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={companion.reslocation}
                            onChange={(e)=>setcompanion({...companion,reslocation:e.target.value})}
                            // value={formData.location}
                            // onChange={handleChange}
                            // isInvalid={!!errors.location}
                        />
                        {/* <Form.Control.Feedback type="invalid">
                            {errors.location}
                        </Form.Control.Feedback> */}
                    </Form.Group>

                    <Form.Group className='mt-3' controlId="validationFormik03">
                        <Form.Control
                            style={{ borderRadius: '10px' }}
                            type="number"
                            name="phoneNumber"
                            placeholder="Phone number"
                            value={companion.resphone}
                            onChange={(e)=>setcompanion({...companion,resphone:e.target.value})}
                            // value={formData.phoneNumber}
                            // onChange={handleChange}
                            // isInvalid={!!errors.phoneNumber}
                        />
                        {/* <Form.Control.Feedback type="invalid">
                            {errors.phoneNumber}
                        </Form.Control.Feedback> */}
                    </Form.Group>

                    <Form.Group className='mt-3' controlId="validationFormik04">
                        <Form.Control
                            style={{ borderRadius: '10px' }}
                            type="text"
                            name="workingTime"
                            placeholder="Working Time"
                            value={companion.restime}
                            onChange={(e)=>setcompanion({...companion,restime:e.target.value})}
                            // value={formData.workingTime}
                            // onChange={handleChange}
                            // isInvalid={!!errors.workingTime}
                        />
                        {/* <Form.Control.Feedback type="invalid">
                            {errors.workingTime}
                        </Form.Control.Feedback> */}
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button onClick={handleupdate} variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
            <button onClick={handleShow}><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
    );
}

export default Demo;
