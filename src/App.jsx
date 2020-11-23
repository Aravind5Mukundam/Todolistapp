import React from 'react';
import Todolist from './Todolist';
// import {Route, Switch} from 'react-router-dom';
//import Login from './Login';
const App = () =>{
    return(
        <>
            <Todolist/>
            {/* <Switch>
                <Route exact path ='/login' component={Login}/>
                <Route exact path ='/' />
            </Switch> */}
        </>
    );
}

export default App;