import React from 'react'
import './All.css'
import { Link } from 'react-router-dom';
import {useState} from "react"
const Ipod = () => {
  const[num,setNum] = useState(0);
  const incNum=()=>{
    setNum(num+1);
  };
  return (
    <>
      <div class='menu'>
            <li><Link class='submenu' to='/'>All</Link></li>
            <li><Link class='submenu' to='/mac'>Mac</Link></li>
            <li><Link class='submenu'to='/iphone'>iPhone</Link></li>
            <li><Link class='submenu'to='/ipad'>iPad</Link></li>
            <li><Link class='submenu'to='/accessories'>Accessories</Link></li>
            <li><h2>{num}<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhlYHWlf4EZzcqXn9j9ke7YhXOoSC8BTKxA&usqp=CAU" style={{height:'50px',marginTop:'-70px'}}/></h2></li>
        </div>
    <div class='items'>
        <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_j8Ovao4gBwIwvgKblVO64rzI0NTPrTctw&usqp=CAU" style={{height:'150px',width:'200px',marginTop:'40px',marginLeft:'20px'}}/>
          <div className="overlay">
            <img onClick={incNum} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
          </div>
        </div>

        <div class="infoBox">
          <div class="rating">
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
          </div>

          <div class="title">
            Apple Smart Watch
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>


      <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbyYFquruQJ4nIkk4Mv_oqikDVf1HiN-5NSe_-JH4XnO4uSMuXCwHMcY_JxzqgcsyennM&usqp=CAU"/>
          <div className="overlay">
            <img onClick={incNum} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
          </div>
        </div>

        <div class="infoBox">
          <div class="rating">
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
          </div>

          <div class="title">
            Apple Airpods Max
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>
         

      <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD0W6fTESr5EpiraITwxgTe9eZIUgXv1saQ&usqp=CAU"/>
          <div className="overlay">
            <img onClick={incNum} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
          </div>
        </div>

        <div class="infoBox">
          <div class="rating">
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
          </div>

          <div class="title">
            Apple Magic Trackpad 2
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>
    </div>




    <div class='items'>
        <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxy_C52dIbXtJxaxtvGJ72n7tjwX146lbPag&usqp=CAU"/>
          <div className="overlay">
            <img onClick={incNum} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
          </div>
        </div>

        <div class="infoBox">
          <div class="rating">
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
          </div>

          <div class="title">
            Iphone lightning dock
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>


      <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0DnH9c6vdNEKjB81f-_4nm7vsSGgy82n21mrn9573kvUFsiQBUSZzemz3r7qyGmJ69k&usqp=CAU"/>
          <div className="overlay">
            <img onClick={incNum} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
          </div>
        </div>

        <div class="infoBox">
          <div class="rating">
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
          </div>

          <div class="title">
            Apple Mac Mini
            <span class="price" style={{marginLeft:'60px'}}>
            $499</span>
          </div>

        </div>
      </div>
         

      <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/7120GgUKj3L._SL1500_.jpg"/>
          <div className="overlay">
            <img onClick={incNum} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
          </div>
        </div>

        <div class="infoBox">
          <div class="rating">
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
            <img src="https://cdn1.iconfinder.com/data/icons/stars-2/381/star-shape-yellow_03-512.png"/>
          </div>

          <div class="title">
            Apple Airpods
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>
    </div>

    </>
  )
}

export default Ipod