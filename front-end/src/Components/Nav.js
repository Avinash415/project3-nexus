import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();

    const logout=()=>{
        localStorage.clear();
        navigate('/sigUp');
    }
    return(
        <div>
            <img src='./logo.jpg' className='logo' alt='logo'/>
           { 
           auth ? <ul className='nav-ul'>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/sinUp">Logout ({JSON.parse(auth).name})</Link></li>
           </ul>
            :
            <ul className='nav-ul nav-right'>
            <li><Link to="/SinUp">Sin Up</Link></li>
            <li><Link to="/login">Login</Link></li>
            </ul>
           }
        </div>
    );
}

export default Nav;