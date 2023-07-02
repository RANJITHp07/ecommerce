import React from 'react'
import { Category, Mouse, NewReleases, ProductionQuantityLimits } from '@mui/icons-material'
import Adminpanel from '../../component/adminpanel/Adminpanel'
import Navbar from '../../component/Navbar/Navbar'
import { Link } from 'react-router-dom'

function Categories() {
    
  return (
    <div>
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
        <Adminpanel/>
       </div>

      </div>
    </div>
    </div>
  )
}

export default Categories
