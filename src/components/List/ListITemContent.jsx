import React from "react";
import { Col, Row } from "react-bootstrap";

function ListItemContent(props) {
  return (
    <li>
      <Row>
        {props.yearItem ? (
          <Col sm={3}>
            <p>{props.yearItem}</p>
          </Col>
        ) : null}

        <Col>
          <p> <strong>{props.titleItem}</strong></p>
          {props.chargeItem ? <p> <strong>{props.chargeItem}</strong></p> : null}
          {props.descriptItem ? <p>{props.descriptItem}</p> : null}
        </Col>
      </Row>
    </li>
  );
}

export default ListItemContent;
