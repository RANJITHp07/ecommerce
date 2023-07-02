import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import Aos from "aos";
import "aos/dist/aos.css"
import { FitbitOutlined } from '@mui/icons-material'
import {message} from "antd"
import { CircularProgress } from '@mui/material';

function Register() {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  const [isfetch,setisfetch]=useState(false)
    const username=useRef()
    const email=useRef()
    const password=useRef()
    const address=useRef()
    const phone=useRef()
    const repassword=useRef()
    const favourite=useRef()
    const favpassword=useRef()

    const handleSubmit=async (e)=>{
       setisfetch(true)
        e.preventDefault()
        const user={
            username:username.current.value,
            email:email.current.value,
            password:password.current.value,
            address:address.current.value,
            phone:phone.current.value,
            favourite:favourite.current.value,
            favpassword:favpassword.current.value
        }
        console.log(user) 
        if(password.current.value===repassword.current.value){
          try{
            const res=await axios.post("http://localhost:8000/auth/register",user)
            message.success("Succesfully logged in")
            setisfetch(false)
            console.log(res.data.succes)
        }catch(err){
            console.log(err)
        }
        }
        else{
          password.current.setCustomValidity("Password don't match ")
        }
    }

  return (
    <div data-aos="fade-down" style={{backgroundColor:"#f0f2f5",borderRadius:"1rem"}} className='row m-5' >
    <div className='col-lg-6 register'>
      <img src={process.env.PUBLIC_URL + 'image/registercover.jpg'} className='img-fluid '/>
    </div>
       <div className='m-5'>
       <h1 className='text-center title mb-5'><FitbitOutlined/> STORE</h1>
      <form onSubmit={handleSubmit}>
      <div className="row mb-3">
  <div className="col-lg-6">
    <input type="text" className="form-control" placeholder="Name" ref={username} required/>
  </div>
  <div className="col">
    <input type="email" className="form-control" placeholder="Email"  ref={email} required />
  </div>
</div>
<input className='form-control mb-3' type='password' placeholder='password' minLength={6} ref={password} required/>
<input className='form-control mb-3' type='password' placeholder='Password Again' minLength={6} ref={repassword} required/>
<input className='form-control mb-3' type='text' placeholder='Phone' ref={phone} required/>
<input className='form-control mb-3' type='text' placeholder='Address' ref={address} required/>
<select class="form-control mb-3" ref={favourite} >
  <option>What is your favourite food?</option>
  <option>What is your favourite sports?</option>
  <option>What is your favourite place?</option>
</select>
<input className='form-control mb-3' type='text' placeholder="Enter your favourite" ref={favpassword} required/>
        <button className='btn btn-primary mb-3' type='submit'>{isfetch? <CircularProgress color='inherit' />:"Submit"}</button>
      </form>
    </div>
    </div>
  
  )
}

export default Register
