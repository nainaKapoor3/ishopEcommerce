import Navbar from './ElementsFolder/Navbar';
import Title from './ElementsFolder/Title';
import Mac from "./ElementsFolder/Mac";
import All from "./ElementsFolder/All";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Backgrnd from './Backgrnd';
import Iphone from './ElementsFolder/Iphone';
import Ipad from './ElementsFolder/Ipad';
import Accessories from './ElementsFolder/Accessories';
import Slider from './ElementsFolder/Slider';
import Footer from './Footer';
import Store from './ElementsFolder/Store';

import Login from './ElementsFolder/Login';
function App() {
    
  

  return (
    <div className="App">
      <>
      <BrowserRouter>
    <Navbar/>
    {/* <Routes>
      <Route path='/' element={<Title/>}/>
    </Routes> */}
    {/* <Title/> */}
    <Routes>
      <Route />
      <Route path='/' element={<><Title/><All/><Backgrnd/><Slider/><Footer/></>}/> 
      <Route path='/mac' element={<><Title/><Mac/><Backgrnd/><Slider/><Footer/></>}/>
      <Route path='/iphone' element={<><Title/><Iphone/><Backgrnd/><Slider/><Footer/></>}/>
      <Route path='/ipad' element={<><Title/><Ipad/><Backgrnd/><Slider/><Footer/></>}/>
      <Route path='/accessories' element={<><Title/><Accessories/><Backgrnd/><Slider/><Footer/></>}/>
      <Route path='/store' element={<Store/>}/>
      
      <Route path='/login' element={<Login/>}/>
      
    </Routes>
    
    
    
    </BrowserRouter>
      </>
      
    </div>
  );
}

export default App;
