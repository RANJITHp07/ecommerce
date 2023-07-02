import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import "./Items.css"
import { Link } from 'react-router-dom';

function Items() {
    useEffect(()=>{
        Aos.init({duration:2000})
      })
  return (
    <div data-aos="fade-left" className='container mt-5 mb-5'>
     <div className='row'>
     <div className='col-lg-4 mb-3' style={{position:"relative"}}>
           <div className='items-title'>
             <h4>Clothes</h4>
           </div>
          <Link to={'/product/Cloth'}><img src={process.env.PUBLIC_URL + 'image/SHIRT.webp'} className='img-fluid img-blur item'/></Link>
        </div>
        <div className='col-lg-4 mb-3'>
        <div className='items-title'>
             <h4>Watches</h4>
           </div>
         <Link to={'/product/Watch'}><img src={process.env.PUBLIC_URL + 'image/WATCHES.jpeg'} className='img-fluid img-opacity item'/></Link>
        </div>
        <div className='col-lg-4 mb-3'>
        <div className='items-title'>
             <h4>Shoes</h4>
           </div>
        <Link to={'/product/Shoe'}><img src={process.env.PUBLIC_URL + 'image/SHOES.webp'} className='img-fluid img-opacity item'/></Link>
        </div>
     </div>
    </div>
  )
}

export default Items
