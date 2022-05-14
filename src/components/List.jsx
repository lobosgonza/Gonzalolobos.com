import React from "react";
import { Container } from "react-bootstrap";
import ListItemContent from "./partials/ListITemContent";


function List (props){
return(
    <Container>

    <h2>{props.titleSection}</h2>

<ul>

{  props.data.map ( item => {return( <ListItemContent yearItem={item.year} descriptItem={item.description} carreerItem={item.carreer} />)} ) } 

</ul>

    </Container>
)
}


export default List;