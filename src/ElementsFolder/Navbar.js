import React from "react";
import './Navbar.css';

import {Routes,Route, BrowserRouter,Link} from "react-router-dom";
const Navbar=({props})=>{
  return(
  <>
       <nav style={{margin:'-10px -8px -4px -8px'}}>
      <div class="menu-icon">
        <span class="fas fa-bars"></span>
      </div>
      <div class="logo">iShop</div>

      <div class="nav-items">
        <li><Link class='link' to="/">Home</Link></li>
        <li><Link class='link' to="/store">Shop</Link></li>
        <li><Link class='link' to="/">Sign Up</Link></li>
        <li><Link class='link' to="/login">Login</Link></li>
        
      </div>
      
      <Link to="/cart"><h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhlYHWlf4EZzcqXn9j9ke7YhXOoSC8BTKxA&usqp=CAU" style={{height:'50px',width:'70px',marginRight:'30px'}}/></h1></Link>
      <form action="#"> 
        <input type="search" class="search-data" placeholder="Search" required/>
      </form>
    
    </nav>

      
    
  </>
  )
}

export default Navbar;