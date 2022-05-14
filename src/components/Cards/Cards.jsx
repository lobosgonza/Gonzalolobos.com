import React from "react";
import { Container, Row , Col} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Subtitle from "../partials/Subtitle";



function Cards(props){

var dataArray = props.data


    return(
<Container>

<Row>
<Subtitle title={props.subtitle} />

{dataArray.map((item) => {return(

    <Col sm={4} id={item.id} key={item.id}>
   
    <FontAwesomeIcon icon={item.icon}/><br/>
    <strong>{item.title}</strong>
<p>{item.description}</p>
    </Col>

)}
)}





</Row>
</Container>




    )
}


export default Cards;