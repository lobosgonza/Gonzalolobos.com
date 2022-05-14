import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'

import Subtitle from "./partials/Subtitle"

function ImgText(props){

if (props.sideImg === "right"){
return(
<Container>
    <Row>
        <Col sm={4}>
        <Figure>
            <Figure.Image width={171} height={180} alt="171x180" src="holder.js/171x180" />

        </Figure>
        </Col>
        <Col sm={8}>
        <Subtitle title={props.subtitle} />
        <p>{props.text}</p>
        </Col>
    </Row>
</Container>
)
} else if (props.sideImg === "left"){

return(
<Container>
    <Row>
        <Col sm={8}>
        <Subtitle title={props.subtitle} />
     
        <p>{props.text}</p>
        </Col>
        <Col sm={4}>
        <Figure>
            <Figure.Image width={171} height={180} alt="171x180" src="holder.js/171x180" />

        </Figure>
        </Col>
    </Row>
</Container>
)
}else {
return(
<Container>
    <Row>
        <Col sm={12}>
        <Subtitle title={props.subtitle} />
        <p>{props.text}</p>
        </Col>

    </Row>
</Container>
)
}

}

export default ImgText;