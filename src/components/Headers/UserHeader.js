/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";


const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage: `url('https://wallpapercave.com/wp/wp1874191.jpg')`
           ,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Franchise Name</h1>
              <p className="text-white mt-0 mb-5">
              Introducing Franchise , your ultimate culinary companion for seamless and savory dining experiences! As a leading food app franchise, we specialize in revolutionizing the way you indulge in your favorite flavors. Operating on an area-based delivery model, we bring the finest cuisines right to your doorstep, ensuring convenience and satisfaction with every bite.
              </p>
             
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
