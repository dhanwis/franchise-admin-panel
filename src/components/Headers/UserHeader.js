import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = ({ user }) => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage: `url('https://wallpapercave.com/wp/wp1874191.jpg')`,
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
              <h1 className="display-2 text-white">{user.name}</h1>
              <p className="text-white mt-0 mb-5">
                Introducing Franchise , your ultimate culinary companion for
                seamless and savory dining experiences! As a leading food app
                franchise, we specialize in revolutionizing the way you indulge
                in your favorite flavors. Operating on an area-based delivery
                model, we bring the finest cuisines right to your doorstep,
                ensuring convenience and satisfaction with every bite.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
