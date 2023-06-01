import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
export default class Home extends Component{
render(){
        return(
        <section className='home'>
        <div>
        <Carousel>
                     <div className='head-text'>
                      <div className='head-text'>
                      <img src="./ptu.jpg" />
                          <p className="legend"></p>
                      </div>
                      
                      <div className='text-on-image'>
                        <br></br>
                        
                          <h1><p>.</p></h1>
                          {/* <button type="submit" className="btn btn-primary" >
                 View Product 
                </button>
                */}
                        
                      </div>
                      </div>
                      <div className='head-text'>
                      {/* <div className='head-text'>
                      <img src="./joy.jpeg" />
                          <p className="legend"></p>
                      </div> */}
                      {/* <div className='text-on-image1'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1><small><p>One day is not enough to green our earth.Planting caring and love is also expecting our earth from us.
                           Do it, It will heal not  only the land but also your body and mind .</p></small></h1>
                        
                      </div> */}
                      </div>
                      <div className='head-text'>
                      {/* <div className='head-text'>
                      <img src="./pl6.jpg" />
                          <p className="legend"></p>
                      </div> */}
                      {/* <div className='text-on-image'>
                        <h1></h1>
                        
                      </div> */}
                      </div>
                      <div className='head-text'>
                      {/* <div className='head-text'>
                      <img src="./green-sprouts.jpg" />
                          <p className="legend"></p>
                      </div> */}
                      {/* <div className='text-on-image'>
                        <h1></h1>
                        
                      </div> */}
                      </div>
                      <div className='head-text'>
                      {/* <div className='head-text'>
                      <img src="./pl2.jpg" />
                          <p className="legend"></p>
                      </div> */}
                      {/* <div className='text-on-image'>
                        <h1></h1>
                        
                      </div> */}
                      </div>
                      
                      
                  </Carousel>
                    
        </div> 
        <footer className="footer">
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
        </footer>
        </section>
        
        
        
    )
}

}
