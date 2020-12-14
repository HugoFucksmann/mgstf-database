import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return usuario.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    
  }
  return (
      <Card border="primary" className="loginCard shadow">
        <Form onSubmit={handleSubmit}>
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
      </Card>
  );
}
