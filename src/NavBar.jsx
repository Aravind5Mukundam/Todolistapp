import React from 'react';
import { NavLink } from 'react-router-dom';
import Todolist from './Todolist';


const NavBar =()=>{
    return(
        <>
            
            <div className='Menu_style'>
                <NavLink exact activeClassName="active_class" to='/'>Home</NavLink>
                <NavLink exact activeClassName="active_class" to="/login">Login</NavLink>
            </div>
        </>
    );
}

export default NavBar; 
