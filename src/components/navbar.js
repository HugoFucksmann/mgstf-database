import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const getMe = gql`
   {
    Usuario {
      id
      usuario
    }
  },`;

function Header() {
    return (
      <Navbar>
        <Navbar.Brand href="#home">MGSF DataBase</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <QueryUsuario />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
}


const QueryUsuario = () => {
  const token = localStorage.getItem("token");
  const headerss = {
    headers: {
      token,
    },
  };
  return (
    <Query query={getMe} context={headerss}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading</div>;
        if (error) return <div>Error: {error.toString()}</div>;
        if (data) {
          console.log();
          return (
            <div>
              usuario: <b>{data.Usuario.usuario}</b>
            </div>
          );
        }
        return <div>ups !</div>;
      }}
    </Query>
  );
};



export default Header;