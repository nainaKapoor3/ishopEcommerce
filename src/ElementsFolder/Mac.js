import React from 'react'
import './All.css'
import { Link } from 'react-router-dom';
import {useState} from "react"
const Mac = () => {
  
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
          <img src="https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg"/>
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
            MacBook Air M1 Chip
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>


      <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg"/>
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
            Macbook Air M2 chip
            <span class="price" style={{marginLeft:'60px'}}>
            $499</span>
          </div>

        </div>
      </div>
         

      <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/71an9eiBxpL._SX466_.jpg"/>
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
            Apple Macbook Pro
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>
    </div>




    <div class='items'>
        <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/71an9eiBxpL._SX466_.jpg"/>
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
            13inch Macbook Pro
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>


      <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/71an9eiBxpL._SX466_.jpg"/>
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
            14 inch Macbook Pro
            <span class="price" style={{marginLeft:'60px'}}>
            $499</span>
          </div>

        </div>
      </div>
         

      <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/71an9eiBxpL._SX466_.jpg"/>
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
            16 inch Macbook Pro
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>
    </div>

    </>
  )
}

export default Mac