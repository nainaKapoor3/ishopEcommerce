import React from 'react'
import './All.css'
import { Link } from 'react-router-dom';
import {useState} from "react"
const Iphone = () => {
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYfQeu5laQwtTelN-ILIwow6OCpr8Cmfagw&usqp=CAU"/>
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
            Apple iphone 13 Mini
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>


      <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC57fZTt0Pp4oGVI44eLH6Pa7_h_Sk1qpjRg&usqp=CAU"/>
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
            Apple iphone 10 Pro
            <span class="price" style={{marginLeft:'60px'}}>
            $499</span>
          </div>

        </div>
      </div>
         

      <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIbtnmMTjzQs7rtE0JGXJSD7Jel5JM522EQ&usqp=CAU"/>
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
            Apple iphone 11
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>
    </div>




    <div class='items'>
        <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoP7pYisBqDGIhYjWgpityh_Xq3Jiok3Rtg&usqp=CAU"/>
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksqGuZnP3CQ4YJdJHgS_sMhviOQg739z8E5CCh4KgQYE1acGQO_HicwiiTD8LJ09NeYo&usqp=CAU"/>
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrKfo8f0CpYIDQ7GCq5awQiFdnAmw97zXUg&usqp=CAU"/>
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

export default Iphone