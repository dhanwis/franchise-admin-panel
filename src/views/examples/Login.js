import { loginAPI } from "Services/allAPI";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import Swal from "sweetalert2";


const Login = () => {


 

  // form validation
  const [userdata, setUserData] = useState({
    name: "",
    password: "",
  });
  console.log(userdata);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateName = (name) => {
    if (!name.trim()) {
      setNameError("Name is required");
      return false;
    }
    setNameError("");
    return true;
  };

  const validatePassword = (password) => {
     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, one letter and one number"
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
    if (name === "name") {
      validateName(value);
    } else if (name === "password") {
      validatePassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateName(userdata.name);
    const isPasswordValid = validatePassword(userdata.password);
    if (isNameValid && isPasswordValid) {


      // Perform form submission logic here
      console.log("Form submitted successfully");
    } else {
      console.log("Invalid name or password");
    }
  };



 

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <center>
              <b>
                <small>Sign in with</small>
              </b>
            </center>
            <Form className="mt-4" role="form" >
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Franchise name"
                    type="text"
                    name="name"
                    value={userdata.name}
                    onChange={handleInputChange}
                   
                  />
                </InputGroup>
                {nameError && <span className="text-danger">{nameError}</span>}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={userdata.password}
                    onChange={handleInputChange}
                   
                  />
                </InputGroup>
                {passwordError && (
                  <span className="text-danger">{passwordError}</span>
                )}
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id="customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button  className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
