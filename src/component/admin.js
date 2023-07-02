import { Category, Mouse, NewReleases, ProductionQuantityLimits } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Adminpanel from './adminpanel/Adminpanel'
import Navbar from './Navbar/Navbar'
import Createproduct from './createproduct/Createproduct'
import { Link } from 'react-router-dom'

function Admin() {
  const user=JSON.parse(localStorage.getItem("User"))
  const [product,setproduct]=useState([])
  useEffect(()=>{
    async function fetch(){
     const res= await axios.get("http://localhost:8000/product/all",{headers:{
      Authorization:user.token
  }});
     console.log(res.data.message)
      setproduct(res.data.message)
    }
    fetch()
  },[user.token])
  return (
    <div>
      <Navbar/>
      <div className='row mt-5 ml-3'>
        <div className='col-lg-3'>
            <h1 className='title text-center mb-3'>ADMIN PANEL</h1>
            <div  className='bg-primary text-center table'>
            <ul class="list-group list-group-flush">
            <Link to={"/admindashboard/category"}><li class="list-group-item">ADD NEW CATEGORY<span className='float-right'><Category/></span></li></Link>
            <Link to={"/admindashboard/productform"}><li class="list-group-item" >ADD NEW PRODUCTS <span className='float-right'><ProductionQuantityLimits/></span> </li></Link>
             <Link to={'/admindashboard/viewproduct'}><li class="list-group-item" > VIEW PRODUCTS<span className='float-right'><NewReleases/></span></li></Link>
            </ul>
            </div>
        </div>
      
      </div>
    </div>
  )
}

export default Admin
