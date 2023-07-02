import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios';
import Aos from "aos";
import "aos/dist/aos.css"
import { useAuth } from '../../context/authcontext';
import {useNavigate } from 'react-router-dom';
import "./Login.css"
import { CircularProgress} from '@mui/material';
import { FitbitOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { message } from 'antd';

function Login() {
    useEffect(()=>{
        Aos.init({duration:2000})
      })
    const [isfetch,setisfetch]=useState(false)
    const [log,setlog]=useState(true)
    const navigate=useNavigate()
    const [auth,setauth]=useAuth()
    const email=useRef();
    const password=useRef()
    const favpassword=useRef();
    const newpassword=useRef();
    const renewpassword=useRef();

    const click=()=>{
        setlog(!log)
    }

    const handleSubmit1=async(e)=>{
        e.preventDefault()
        try{
            if(newpassword.current.value===renewpassword.current.value){
                const newpassworduser={
                    email:email.current.value,
                    favpassword:favpassword.current.value,
                    newpassword:newpassword.current.value
                 }
                 await axios.put("/auth/updatepassword",newpassworduser)
                 message.success("CHANGED PASSWORD SUCCESFULLY")
                 setlog(!log)
            }
        }catch(err){
            console.log(err)
        }
    }
     
    const handleSubmit=async (e)=>{
        setisfetch(true)
        e.preventDefault()
        const user={
            email:email.current.value,
            password:password.current.value,    
        }
        console.log(user)
        try{
            const res=await axios.post("http://localhost:8000/auth/login",user)
            console.log(res.data.message.token) 
            const verify=await axios.get("http://localhost:8000/auth/verify",{headers:{
                Authorization:res.data.message.token
            }})
            if(verify.data.ok){
                setauth({
                    ...auth,
                    user:res.data.message.user,
                    token:res.data.message.token,
                })
                const newuser={
                    user:res.data.message.user,
                    token:res.data.message.token,
                }
                localStorage.setItem("User",JSON.stringify({...newuser}))
                    message.success("LOGGED SUCCESSFULLY")
                   setisfetch(false)
                    navigate('/')
                
            }else{
                alert("not yet verified")
            }
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div data-aos="fade-down" style={{backgroundColor:"#f0f2f5",borderRadius:"1rem"}} className='row m-5' >
    <div className='col-lg-6 register'>
      <img src={process.env.PUBLIC_URL + 'image/registercover.jpg'} className='img-fluid '/>
    </div>
       <div className='m-5 align-item-center'>
       <h1 className='text-center title mb-5'><FitbitOutlined/> STORE</h1>
      {
        log ?<>
        <form onSubmit={handleSubmit}>
        <input type='email' className='form-control mb-3' placeholder='Email' ref={email}/>
        <input type='password' className='form-control mb-3' placeholder='Password' ref={password}/>
        <button className='btn btn-primary mb-3' type='submit'>{isfetch? <CircularProgress color='inherit' />:"Submit"}</button>
       </form> 
       <span onClick={()=>{click()}}><Link on>forgot password?</Link> </span>
       <br/> 
       <Link to={'/register'}><button className='btn btn-success mt-3'>Create Account</button> </Link>
        </> :<><form onSubmit={handleSubmit1}>
        <input type='email' className='form-control mb-3' placeholder='Email' ref={email}/>
        <input type='text' className='form-control mb-3' placeholder="Enter your favourite" ref={favpassword}/>
        <input type='password' className='form-control mb-3' placeholder='New password' ref={newpassword}/>
         <input type='password' className='form-control mb-3' placeholder='New password again' ref={renewpassword}/>
     <button className='btn btn-primary mb-3' type='submit'>{isfetch? <CircularProgress color='inherit' />:"Submit"}</button>
       </form>
        </>
      }
    </div>
    </div>
  )
}

export default Login
