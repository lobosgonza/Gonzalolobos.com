import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props){

   

const MainBackground = {
    backgroundImage: 'url(' + props.background + ')',
}

return(
    <div className="mainbannerBackground" style={MainBackground}>

<Container className="mainBannerContainer" >
    <Row>
        <Col>
        <h1>Gonzalo Lobos</h1>
        <h4>Desarrollador Web</h4>
        <h4>Ingeniero Comercial</h4>
        </Col>
    </Row>
</Container>
    </div>
)
}

export default Hero;