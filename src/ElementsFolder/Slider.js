import React from 'react'
import ImageSlider from './ImageSlider';
const Slider = () => {
    const slides=[
        {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfxAD4OVR0clJaDM8N3SamrM-brgcNsIdHZg&usqp=CAU',title:'Beats Solo 2 On Ear Headphones'},
        {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJWp49zXlPdHgyZOnc5kxhhKfykaAbadgxQ&usqp=CAU',title:'H Squared tvTray'},
        {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwmOQBOpXk-w1S0geRYOZnGQ2ge7B1Fw6sw&usqp=CAU',title:'Netatmo Rain Gauge'},
        {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9r7CPnJ8oS4FEO8fyg_TFpInsqqsMJceRg&usqp=CAU',title:'Magsafe Charger'},
        {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmeiSspZphw5nhxbb93TGEo7ahizN1lSphw&usqp=CAU',title:'MagSafe Battery Pack'}
    ];

    const containerStyles={
        width:'300px',
        height:'200px',
        margin:'0 auto'

    };

    const mainStyle={
        
        width:'100%',
        height:'300px',
        paddingTop:'50px'
    }
     
  return (
    <div style={mainStyle}>
        <div style={containerStyles}>
        <ImageSlider slides={slides}/>
        </div>
    </div>
  )
}

export default Slider