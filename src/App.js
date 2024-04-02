import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import {Footer} from './components';
import Home from './pages/Home';
import About from './pages/about';
import Shop from './pages/shop';
import Contact from './pages/contact';
import Login from './pages/login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Header />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        
        
        {/* Add more Route components for other paths */}
      </Routes>
    </div>
  );
};

export default App;
