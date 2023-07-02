import React from 'react'
import Cartcard from '../component/Cartcard/Cartcard'
import Navbar from '../component/Navbar/Navbar'
import { useCart } from '../context/cartcontext'

function Cart() {
  const[cart]=useCart()
  return (
    <div>
      <Navbar/>
      <div className='row'>
        <div className='col-lg-8'>
        {
          cart.map((p,i)=>(
            <Cartcard key={p.id} p={p} index={i}/>
          ))
        }
        </div>
        <div className='col-lg-3 ml-5'>
        <div className='mt-5 p-5 summary sticky-top '>
          <h5 className='title text-center'>Summary</h5>
          <hr></hr>
           <p>Total number of items: <b> {cart.length} items</b></p>
           <p>Total price:<b>$13.8</b></p>
           <hr></hr>
           <div className='d-flex justify-content-center'>
           <button className='btn btn-primary btn-block btn-lg'>Pay</button>
           </div>
        </div>
        </div>
      </div>
       </div>

  )
}

export default Cart
