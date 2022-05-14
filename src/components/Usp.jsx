import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function UspItem(){
return(
  <Col>
  <p>Img</p>
   <a>Link</a>
  </Col>
)
}


function Usp() {
return (
<Container>
  <Row>
    <Col>
    <h2>Lorem</h2>
    </Col>
  </Row>
  <Row>
    <UspItem/>
    <UspItem/>
    <UspItem/>
  </Row>
</Container>
);
}

export default Usp;