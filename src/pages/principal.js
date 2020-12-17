import React from "react";
import { Container } from "react-bootstrap";
import Header from '../components/navbar'
import Formu from '../components/formu';
import Tabla from '../components/tabla'

function Principal() {
  return (<>
    <Header />
    <Container>
      <Formu />
      <Tabla />
    </Container>
  </>);
}



export default Principal;
