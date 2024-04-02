import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer';
import { Header } from './components';

 ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <App/>
            <Footer/>
        </Router>
    </React.StrictMode>
 , document.getElementById('root'))
