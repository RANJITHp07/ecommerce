import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import "./Header.css"
import Login from '../Login/Login';

function Header() {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div data-aos="fade-up" className='header'>
  <div id="carouselExampleControls" className="carousel slide" data-interval={4000} >
    <div className="carousel-inner">
      <div className="carousel-item active position-relative">
        <div data-aos="fade-left" className='offer'>
           <h1>NEW SEASON ARRIVED</h1>
           <button className='btn'>Shop now</button>
        </div>
        <img className="d-block w-100 img-fluid" src={process.env.PUBLIC_URL + 'image/shoecover.jpg'}  alt="First slide" />
      </div>
      <div className="carousel-item">
      <div className='offer'>
           <h1 style={{color:"GRAY"}} >NEW PRODUCTS</h1>
           <button className='btn'>Shop now</button>
        </div>
        <img className="d-block w-100" src={process.env.PUBLIC_URL + 'image/clothcover.jpg'} alt="Second slide" />
      </div>
      <div className="carousel-item">
      <div className='offer'>
           <h1>LARGE OFFERS</h1>
           <button className='btn'>Shop now</button>
        </div>
        <img className="d-block w-100" src={process.env.PUBLIC_URL + 'image/watchcover.jpg'} alt="Third slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      
      <span className="sr-only">Next</span>
    </a>
  </div>
<div>
</div>
</div>
  )
}

export default Header
