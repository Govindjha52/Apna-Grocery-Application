import React from 'react';
import { Header } from '../components';
import './home.css';

function About(){
  return (
    <div>
        <Header />
        <div className="heading">
          <h1>Welcome to Grocery App!</h1>
          <p>Grocery information and details about our webpage.</p>
          <p>Our grocery store website offers a wide variety of products, including fresh produce, pantry staples, and household items. We provide a user-friendly interface for easy browsing and ordering, with fast and reliable delivery. Our platform supports secure payment options and offers personalized recommendations to enhance your shopping experience.</p>
          <p>Our website is fully responsive, optimized for mobile devices, and includes effective user account management. Analytics and reporting capabilities provide insights into sales trends, customer behavior, and inventory management. An efficient order management system streamlines the process from point of sale to delivery, and integration with shipping providers ensures timely and accurate deliveries.</p>
          <p>We are committed to providing an effortless and enjoyable shopping experience for all our customers. Sign up or log in to your account today to start shopping!</p>
        </div>
    </div>
  )
}

export default About;