
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="http://dhanwis.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Dhanwis
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href="http://dhanwis.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Dhanwis
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="http://dhanwis.com/about"
                rel="noopener noreferrer"
                target="_blank"
              >
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="http://dhanwis.com/careers#services"
                rel="noopener noreferrer"
                target="_blank"
              >
                Services
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="http://dhanwis.com/contact"
                rel="noopener noreferrer"
                target="_blank"
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
