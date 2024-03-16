import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Demo() {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phoneNumber: '',
        workingTime: ''
    });
    const [errors, setErrors] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.location) {
            newErrors.location = 'Location is required';
        }
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone number is required';
        }
        if (!formData.workingTime) {
            newErrors.workingTime = 'Working Time is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Form submission logic goes here
            console.log('Form submitted:', formData);
            handleClose();
        }
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form.Group className='mt-5' controlId="validationFormik01">
                        <Form.Control
                            style={{ borderRadius: '10px' }}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mt-3' controlId="validationFormik02">
                        <Form.Control
                            style={{ borderRadius: '10px' }}
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={formData.location}
                            onChange={handleChange}
                            isInvalid={!!errors.location}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.location}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mt-3' controlId="validationFormik03">
                        <Form.Control
                            style={{ borderRadius: '10px' }}
                            type="number"
                            name="phoneNumber"
                            placeholder="Phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            isInvalid={!!errors.phoneNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.phoneNumber}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mt-3' controlId="validationFormik04">
                        <Form.Control
                            style={{ borderRadius: '10px' }}
                            type="text"
                            name="workingTime"
                            placeholder="Working Time"
                            value={formData.workingTime}
                            onChange={handleChange}
                            isInvalid={!!errors.workingTime}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.workingTime}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
            <button onClick={handleShow}><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
    );
}

export default Demo;
