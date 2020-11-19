import React from 'react';
import NavBar from './NavBar';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
const App = () =>{
    return(
        <>
            <NavBar/>
            <Switch>
                <Route exact path ='/login' component={Login}/>
                <Route exact path ='/' />
            </Switch>
        </>
    );
}

export default App;