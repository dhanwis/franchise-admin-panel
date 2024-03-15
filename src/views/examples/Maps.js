
import React from "react";


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
import CustomizedTables from "./Tableees";

const MapWrapper = () => {
 
};

const Maps = () => {
  return (
    <>
      <Header />
      
      <Container className="mt--7" fluid>
      
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Order List</h3>

              </CardHeader>
              <CardBody>
              
    
    <CustomizedTables />

               
               
              </CardBody>
            </Card>

         
          
          </div>
        </Row>



       
      </Container>
     
    </>
  );
};

export default Maps;
