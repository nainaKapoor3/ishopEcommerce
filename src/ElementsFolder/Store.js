import React from 'react'
import './Store.css'
import img from "../Images/mobile_c2.png";
import Footer from '../Footer';
const Store = () => {
  return (
    <>
    <div className='menu'>
      <div className='access' style={{marginLeft:'-400px'}}>
        <h4 style={{marginLeft:'40px',fontSize:'20px'}}>Accessories</h4>
        <ul style={{listStyleType:'none',marginTop:'20px'}}>
          <li style={{marginBottom:'20px'}}>Apple Car<span style={{marginLeft:'100px'}}>2</span></li>
          <li style={{marginBottom:'20px'}}>Air port and wireless<span style={{marginLeft:'30px'}}>48</span></li>
          <li style={{marginBottom:'20px'}}>Cables and docks<span style={{marginLeft:'52px'}}>14</span></li>
          <li style={{marginBottom:'20px'}}>Cases and Films<span style={{marginLeft:'56px'}}>15</span></li>
          <li style={{marginBottom:'20px'}}>Charging Devices<span style={{marginLeft:'47px'}}>23</span></li>
          <li style={{marginBottom:'20px'}}>Connected home<span style={{marginLeft:'56px'}}>1</span></li>
          <li style={{marginBottom:'20px'}}>Headphones<span style={{marginLeft:'80px'}}>95</span></li>
        </ul>
      </div>

      <div>
        <img src={img} style={{height:'350px',width:'1000px',marginTop:'15px'}}/>
      </div>
    </div>



    <div style={{display:'flex'}}>

    <div className='access' style={{marginLeft:'50px',height:'300px',width:'250px'}}>
        <h4 style={{marginLeft:'70px',fontSize:'20px'}}>BRAND</h4>
        <ul style={{listStyleType:'none',marginLeft:'20px',marginTop:'40px'}}>
          <li style={{marginBottom:'20px'}}>Apple<span style={{marginLeft:'100px'}}>99</span></li>
          <li style={{marginBottom:'20px'}}>LG<span style={{marginLeft:'116px'}}>99</span></li>
          <li style={{marginBottom:'20px'}}>Samsumg<span style={{marginLeft:'74px'}}>99</span></li>
          <li style={{marginBottom:'20px'}}>Siemens<span style={{marginLeft:'80px'}}>99</span></li>
          
        </ul>
      </div>
      <div style={{marginTop:'20px',height:'1000px',width:'400px',marginLeft:'-110px'}}>
        <div className='access' style={{height:'50px',width:'890px',marginLeft:'160px',marginTop:'-12px',display:'flex'}}>
          <h2 style={{marginLeft:'350px',marginTop:'10px'}}>SHOP NOW</h2>
        </div>
        <div class='items' style={{marginTop:'-30px'}}>
        <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/7120GgUKj3L._SL1500_.jpg"/>
          <div className="overlay">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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
            Apple AirPods Pro
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>


      <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"/>
          <div className="overlay">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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
            Apple Iphone 11
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>
         

      <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/71an9eiBxpL._SX466_.jpg"/>
          <div className="overlay">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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




    <div class='items' style={{marginTop:'-50px'}}>
        <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/71LfnkRgZ4L._SY355_.jpg"/>
          <div className="overlay">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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
            Apple Watch 21-1
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>


      <div class="card">
        <div class="imgContainer">
          <img src="https://n2.sdlcdn.com/imgs/a/i/g/New-Apple-iPod-touch-32GB-1537303-1-0a98f.jpg"/>
          <div className="overlay">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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
            Apple Ipod 2A
            <span class="price" style={{marginLeft:'60px'}}>
            $499</span>
          </div>

        </div>
      </div>
         

      <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/71ZXj1QEE0L._SX522_.jpg"/>
          <div className="overlay">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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
            Apple Ipad
            <span class="price" style={{marginLeft:'60px'}}>
            $449</span>
          </div>

        </div>
      </div>
    </div>

    <div class='items' style={{marginTop:'-50px'}}>
        <div class="card">
        <div class="imgContainer">
          <img src="https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg"/>
          <div className="overlay">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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

    <div class='items' style={{marginTop:'-50px',marginBottom:'30px'}}>
        <div class="card">
        <div class="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYfQeu5laQwtTelN-ILIwow6OCpr8Cmfagw&usqp=CAU"/>
          <div className="overlay">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"/>
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
      

      </div>

      </div>

      <div style={{marginTop:'500px'}}>
      <Footer/>
      </div>
    </>
  )
}

export default Store