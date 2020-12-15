import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import Cookies from "js-cookie";

const Mlogin = gql`
  mutation login($usuario: String!, $password: String!) {
    login(input: { usuario: $usuario, password: $password }) {
      msg
      autenticated
      token
    }
  }`;

export default function Login(props) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  
  function validateForm() {
    return usuario.length > 0 && password.length > 0;
  }

  function handleSubmit( autentication, e ) {
    e.preventDefault();
    autentication({
       variables: { usuario, password },
     });
  }
  
  return (
    <Mutation mutation={Mlogin}>
      {(autentication, { data }) => {
        if (data && data.login.msg === "login ok!") {
          Cookies.set('x-token', data.login.token);
          props.history.push("/inicio");
        }
        return (
          <Card border="primary" className="loginCard shadow">
            <Form onSubmit={(e) => handleSubmit(autentication, e)}>
              <Form.Group size="lg" controlId="usuario">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
              </Button>
            </Form>
            <br />
            {data && <h6>{data.login.msg}</h6>}
          </Card>
        );
      }}
    </Mutation>
  );
}
