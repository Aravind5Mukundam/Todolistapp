// import { Button, Switch } from '@material-ui/core';
import React from 'react';
import logo from './Images/logo.png'
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #c6c95f;
    }
    .navbar-brand{
        color: #353535;
        font-size: 40px;
        &:hover {
            color:white;
        }
    }
`;

const Header = () => {
  return (
      <>
        <Styles>
          <Navbar expand="lg">            
            <img  src={logo} alt ="logo" width='70'  height='60'/>
            <Navbar.Brand href="/">Todolist </Navbar.Brand>         
          </Navbar>
        </Styles>
      </>
  );
}

export default Header;