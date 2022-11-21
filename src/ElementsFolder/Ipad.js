import React from 'react'
import './All.css'
import { Link } from 'react-router-dom';
import {useState} from "react"
const Ipad = () => {
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx04LC58u6UEcJ-7gTuSmD-GTk5hWHR17R3Q&usqp=CAU"/>
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
            Apple ipad 10.2 inch
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>


      <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkgwOkvzm-JAtJ9YZG7rahMJmJw2cYoNy-w&usqp=CAU"/>
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
          Apple ipad 10.9 inch
            <span class="price" style={{marginLeft:'60px'}}>
            $499</span>
          </div>

        </div>
      </div>
         

      <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkg9duizbyd3Jk3ZmOlsC5UBIIqMGi02pMWQ&usqp=CAU" style={{height:'150px',marginTop:'40px'}}/>
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
            Apple ipad Pro
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>
    </div>




    <div class='items'>
        <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72MpUBXWeDynO61QEMfbOgMMuUu9iQxt1QQK7ZYGLm-pysHCEYFx4oXv3kS7BNQz7sDI&usqp=CAU"  style={{height:'150px',width:'200px',marginTop:'40px',marginLeft:'20px'}}/>
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
            Apple iphone 12 Max
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>


      <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznHb1N5Ao9arHJz3eURgltHmwaMHnr_59Ig&usqp=CAU"/>
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
            Apple iphone 13
            <span class="price" style={{marginLeft:'60px'}}>
            $499</span>
          </div>

        </div>
      </div>
         

      <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqiWzxwn9KH65dWTyEqGcFqMdrzVfzxMbew&usqp=CAU" style={{height:'150px',width:'200px',marginTop:'40px',marginLeft:'20px'}}/>
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
            Apple iphone 12 Pro Max
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>
    </div>

    </>
  )
}

export default Ipad