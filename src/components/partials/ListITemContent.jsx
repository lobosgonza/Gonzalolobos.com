import React from "react";
import { Col, Row } from "react-bootstrap";


function ListItemContent(props){



return(
    <Row>

<Col sm={12}>

  <li>
<p>{props.yearItem}</p>
<h4>{props.carreerItem}</h4>
<p>{props.descriptItem}</p>
  </li>
</Col>
    </Row>
)


}

export default ListItemContent;