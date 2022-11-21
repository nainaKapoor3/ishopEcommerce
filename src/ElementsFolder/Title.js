import React from "react";
import { Link } from "react-router-dom";
import Backgrnd from "../Backgrnd";
import img from "../Images/mobile_c2.png";
import All from "./All";
import './Title.css'
const Title=()=>{
    return(
        <>
        
        <img src={img} class="titleImg" alt='img' style={{width:"100%" ,height:"500px",paddingLeft:"0px"}}/>
        <div id="sidelabel" style={{marginTop:'30px'}}>Shop your favourite products<br/> at genuine prices</div>
        <h3 style={{textAlign:'center',fontSize:'30px', marginBottom:'30px'}}>BEST SELLER</h3>
        
        {/* <div class='menu'>
            <li><Link class='submenu' to='/'>All</Link></li>
            <li><Link class='submenu' to='/mac'>Mac</Link></li>
            <li><Link class='submenu'to='/iphone'>iPhone</Link></li>
            <li><Link class='submenu'to='/ipad'>iPad</Link></li>
            <li><Link class='submenu'to='/accessories'>Accessories</Link></li>
            <li><h2><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhlYHWlf4EZzcqXn9j9ke7YhXOoSC8BTKxA&usqp=CAU" style={{height:'50px',marginTop:'-70px'}}/></h2></li>
        </div> */}
        </>
    )

}

export default Title;