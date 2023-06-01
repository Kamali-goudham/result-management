import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "react-bootstrap";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SignIn from './components/signin.component'
import SignInstud from './components/signinstud.component'
import Show from './components/show.component'
import Showstud from './components/showstud.component'
import Add from './components/add.component'
import Display from './components/display.component'
import Admin from './components/admin.component'
import SignUp from './components/signup.component'
import Signupstud from './components/signupstud.component'
import Product from './components/product'
import About from './components/about.component'
import Home from './components/carousel.component'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {HashLink} from 'react-router-hash-link';
import  ButtonGroup  from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button';


function App(

)
{
  return (  
    
<section>
  
    <Router className="router">
      <div className="App" >
        <nav className="navbar navbar-expand-lg navbar-light fixed-top"> 
        {/* <nav className="navbar"> */}
          <div className="container">
            <Link className="navbar-brand" href="#section1"  to={'/carousel'}>
              <img src="./logo.png"></img>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/carousel'}>
                    Home
                  </Link>
                </li>
                 <li className="nav-item">
                <Link className="nav-link" to={'/admin'}>
                   Admin
                  </Link>
                </li> 
                <li className="nav-item">
                  <Link className="nav-link" hrefLang='section1' to={'/sign-up'}>
                    Faculty
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={'/signup'}>
                    Student
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={'/about'}>
                   About
                  </Link>
                </li>
                              <li className="nav-item">
                              
                  <center><h1 style={{color:'green'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RESULT PORTAL</h1></center>
                  </li>
                  
              </ul>
            </div>
          </div>
          <br></br>
        </nav>
        {/* <section id='form'> */}
       
  
        <div className="auth-wrapper">
         <div className="auth-inner"> 
            <Routes>
              {/* <Route exact path="/login" element={<Login />} /> */}
              {/* <Route path="/sign-in" element={<SignIn />} /> */}
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/signup" element={<Signupstud/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/display" element={<Display />} />
            </Routes>
          </div>
        </div>
        <Routes>
      
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/signin" element={<SignInstud />} />
         <Route path="/carousel" element={<Home/>} /> 
        <Route path="/product" element={<Product/>} />
        <Route path="/add" element={<Add/>} />
        </Routes>
      </div>
      <div>
      </div>
      {/* <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <h4>About Us</h4>
                <p>We are dedicated to providing accurate and timely results for all our users. Our result portal aims to make it easy for students and faculty to access their exam results online</p>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <h4>Contact Us</h4>
                <ul className="footer-contact">
                <li><i className="fa fa-phone"></i> 0413-2655281-288</li>
                  <li><i className="fa fa-envelope"></i> info@ptuniv.edu.in</li>
                  <li><i className="fa fa-map-marker"></i> East coast Road, Pillaichavady, Puducherry, 605 014.</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4>Follow Us</h4>
                <ul className="footer-social">
                <li><a href="https://www.facebook.com/PTU.Pondicherry/" target="_blank" rel="noopener noreferrer"><img src="facebook.png" alt="Facebook" ></img></a></li>
               <li><a href="https://www.youtube.com/channel/UC_KX66VEKIHunrHSsQwcNEw" target="_blank" rel="noopener noreferrer"> <img src="youtube.png" alt="Youtube"></img></a></li>
               <li><a href="https://www.instagram.com/puducherry_tech_university/" target="_blank" rel="noopener noreferrer"><img src="instagram.png" alt="Instagram"></img></a></li>
               </ul>
              </div>
            </div>
          </div>
        </footer> */}
    
     
      
    </Router>
    

    </section>
        
  )
}
 

export default App;