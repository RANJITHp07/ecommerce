import { AccessAlarmOutlined, LocalShipping, ShieldMoonOutlined } from '@mui/icons-material'
import React ,{useEffect}from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import "./Service.css"

function Serivces() {
    useEffect(()=>{
        Aos.init({duration:2000})
      })
  return (
    <div data-aos="fade-right" className='row service mt-5'>
      <div data-aos="fade-up" className='col-4 mt-5'>
         <h3 className='text-center'><LocalShipping/> Free shipping</h3>
         <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non neque vitae odio commodo imperdiet vitae id eros. Suspendisse</p>
      </div>
      <div data-aos="fade-down" className='col-4'>
      <h3 className='text-center'><AccessAlarmOutlined/> 24/7 Support</h3>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non neque vitae odio commodo imperdiet vitae id eros. Suspendisse</p>
      </div>
      <div data-aos="fade-up"  className='col-4 mt-5'>
      <h3 className='text-center'><ShieldMoonOutlined/>Secure Payment</h3>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non neque vitae odio commodo imperdiet vitae id eros. Suspendisse</p>
      </div>
    </div>
  )
}

export default Serivces
