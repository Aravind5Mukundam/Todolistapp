// import { Button, Switch } from '@material-ui/core';
import React from 'react';
import logo from './Images/logo.png'
import Login from './Login';
import Signup from './Signup';
import {Route, Switch} from 'react-router-dom';

const Header = () => {
  return (
      <>
          <div className="header"> 
            
            <img  src={logo} alt ="logo" width='70'  height='60'/>
            <h1 className="h1">To Do List</h1>
            <Switch>
              <Route exact path ='/login' component={Login}/>
              <Route exact path ='/signup' component={Signup}/>
            </Switch>
                

          </div>
      </>
  );
}

export default Header;