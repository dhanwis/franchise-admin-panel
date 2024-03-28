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
  Spinner,
  Alert,
  Col,
} from "reactstrap";

const Login = () => {

  // form validation
  const [userdata, setUserData] = useState({
    franchiseName: "",
    password: "",
  });

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);

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
    if (name === "franchiseName") {
      validateName(value);
    } else if (name === "password") {
      validatePassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isNameValid = validateName(userdata.franchiseName);
    const isPasswordValid = validatePassword(userdata.password);

    // Clear any previous errors
    setError("");

    if (isNameValid && isPasswordValid) {
      try {
        // Show loading state
        setLoading(true);

        await login(userdata.franchiseName, userdata.password);

        // Redirect after successful login
        navigate("/admin/index");
      } catch (error) {
        // Set error message
        setError(
          error.response?.data?.message || "An error occurred during login."
        );
      } finally {
        // Hide loading state after a short delay
        setTimeout(() => {
          setLoading(false);
        }, 1000); // Adjust the delay time as needed
      }
    } else {
      setError("Please fill up both fields");
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
                    name="franchiseName"
                    value={userdata.franchiseName}
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
              {/* <div className="custom-control custom-control-alternative custom-checkbox">
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
              </div> */}
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>

              <Alert color="error" severity="info" sx={{ mt: 3 }}>
                <Typography color="error" variant="body2">
                  {error && error}
                </Typography>
              </Alert>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
