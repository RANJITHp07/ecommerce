import React, { useEffect, useRef, useState } from 'react'
import { Category, Mouse, NewReleases, ProductionQuantityLimits } from '@mui/icons-material'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'
import Card from '../../component/Cards/Card'
import { Link } from 'react-router-dom'


function Allproduct() {
    const user=JSON.parse(localStorage.getItem("User"))
    const category=useRef()
    const [product,setproduct]=useState([])

    useEffect(()=>{
        async function fetch(){
            const res=await axios.get(`http://localhost:8000/product/get/${category.current.value}`,{
                headers: {
                  Authorization: user.token,
                },
              })
            setproduct(res.data.message)
        }
        fetch()
    },[product])
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
          <div className='col-lg-9' style={{backgroundColor:"#f0f2f5"}}>
          <select class="form-control m-3 col-lg-5" ref={category} >
                 <option>Watch</option>
                 <option>Cloth</option>
                 <option>Shoe</option>
                </select>
                <div className='row'>
                {product.map((p) => (
                 <div className='col'>
                 <Card product={p} />
                 </div>
               ))}
                </div>
       </div>
      </div>
  </div>
  )
}

export default Allproduct
