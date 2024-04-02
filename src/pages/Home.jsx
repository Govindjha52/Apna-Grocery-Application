import React from 'react';
import { Header } from '../components';
import './home.css';
import Footer from '../components/Footer';
import photo from '../assest/photo.jpg';
import photo1 from '../assest/photo1.jpg';
import photo2 from '../assest/photo2.jpg';
import photo3 from '../assest/photo3.jpg';
import photo4 from '../assest/photo4.jpg';
import photo5 from '../assest/photo5.jpg';

function Home(){
  
  const handleStartShopping = () => {
   
    console.log("Redirecting to the shopping page...");
  }

  return (
    <div>
      <Header />
     
      <div className="sliderContainer">
        <div className="slider">
          <img src={photo} alt="404"/>
          <img src={photo1} alt="404"/>
          <img src={photo2} alt="404"/>
          <img src={photo3} alt="404"/>
          <img src={photo4} alt="404"/>
          <img src={photo5} alt="404"/>
        </div>
      </div>
      <div className="heading"> 
        <h1>Welcome to Grocery App!</h1>
        <p>Start shopping for all your grocery needs.</p>
      </div>
      
    </div>
  )
}

export default Home;
