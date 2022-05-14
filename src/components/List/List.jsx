import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListItemContent from "./ListITemContent";
import Subtitle from "../partials/Subtitle"

function List(props) {

    var dataArray = props.data

  return (
    <Container>

    <Col>
    <Subtitle title={props.subtitle} />

      <ul>
        {dataArray.map((item) => {
          return (
            <ListItemContent
            id={item.id}
            key={item.id}
              yearItem={item.year}
              descriptItem={item.description}
              titleItem={item.title}
              chargeItem={item.charge}
            />
          );
        })}
      </ul>
    </Col>
            </Container>
  );
}

export default List;
