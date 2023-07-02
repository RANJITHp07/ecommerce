import React from 'react'
import {FavoriteBorder, FitbitOutlined, Person, Search, ShoppingCartOutlined} from "@mui/icons-material"
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { Avatar, Badge, Space } from 'antd';
import { useCart } from '../../context/cartcontext'

function Navbar() {
  const[cart]=useCart()
    const user=localStorage.getItem("User")
    const click=()=>{
      localStorage.removeItem("User")
    }
 return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand mr-5 title" href="#"><FitbitOutlined/> STORE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div class="input-group mx-auto text-center">
  <div class="input-group-prepend">
    <span class="input-group-text searchfeild" id="basic-addon1"><Search/></span>
  </div>
  <input type="text" class="form-control searchfeild" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
  <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">HOME<span className="sr-only">(current)</span></a>
      </li>
     <li className="nav-item">
        <a className="nav-link" href="#">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">PRIVACY</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          CATEGORY
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Log in</a>
          <a className="dropdown-item" href="/">Another action</a>
          
        </div>
      </li>
      <div className='mt-2 ml-3'>
      <span className='mt-3 mr-3'><FavoriteBorder/></span>
      </div>
      <div className='mt-2  mr-3'>
      <Link to={user?"/cart":"/login"}><span className='mt-3'><Badge size="default" count={cart.length}>
      <ShoppingCartOutlined htmlColor='black' />
    </Badge></span></Link>
      </div>
      <div class="dropdown show">
  <a class="btn btn-secondary" href="#"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <Person/>
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  {
    user? <a class="dropdown-item" href="/login" onClick={()=>{click()}}>Logout</a> :""
  }
    <a class="dropdown-item" href="/login">Login</a>
    <a class="dropdown-item" href="/register">Register</a>
  </div>
</div>
    </ul>
  </div>
</nav>
    
    </div>
  )
}

export default Navbar
