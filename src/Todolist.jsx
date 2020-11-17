import React from 'react';
import App from './App';
import Login from './Login';
// import Signup from './Signup';
import Header from './Header';
import Footer from './Footer';
import {Route, Switch} from 'react-router-dom';



const Todolist = () => {
    return(
        <>  
            <Switch>
              <Route exact path ='/login' component={Login}/>
              {/* ?<Route exact path ='/signup' component={Signup}/> */}
            </Switch>
            <Header/>
            <App/>
            <Footer/>
        </>
    );
}


export default Todolist;