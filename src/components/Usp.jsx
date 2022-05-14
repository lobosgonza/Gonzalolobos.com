import React from "react";
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Subtitle from "./partials/Subtitle";



function Usp(props) {


function UspItem(props){
  
 function renderTooltip (e) {
   return( <Tooltip id="button-tooltip" {...e}>
   {props.overlayText}
    </Tooltip>)}
  ;
  
  return(
  <Col>
  <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
   <a href={props.link} target="_blank" >
   <FontAwesomeIcon icon={props.icon}/>
   </a>
  </OverlayTrigger>
  </Col>

)
}







return (
<Container>
  <Row>
    <Col>
    <Subtitle title={props.subtitle} />
    </Col>
  </Row>
  <Row>
    <UspItem icon={faWhatsapp} link="https://api.whatsapp.com/send?phone=56965961086" overlayText="Whatsapp"/>
    <UspItem icon={faInstagram} link="https://www.instagram.com/gonzalobos28" overlayText="Instagram"/>
    <UspItem icon={faLinkedin} link="https://www.linkedin.com/in/gonzalo-lobos-ramírez-él-he-him-46964275" overlayText="Linkedin"/>
  </Row>
</Container>
);
}

export default Usp;