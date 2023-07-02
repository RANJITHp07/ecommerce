import React,{useState} from 'react'
import Detail from '../component/detail/Detail'

function Product() {
    
    const array=[
        "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300901099STONE_2_1024x1024.jpg?v=1654701127",
         "https://images.jackwills.com/images/products/52217804_4plat_a1.jpg",
          'https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300901099STONE_3_1024x1024.jpg?v=1654701127'
    ]
    const [state,setState]=useState(array[0])
    const click=(i)=>{
        setState(array[i])
    }
  return (
    <div className='mt-5 ml-5'>
      <div className='row'>
          <div className='col-lg-1'>
             <div className='mb-3'>
             <img src={array[1]} onClick={()=>{click(1)}} className='img-fluid'/>
             </div>
             <div>
             <img src={array[2]}  onClick={()=>{click(2)}} className='img-fluid'/>
             </div>
          </div>
          <div className='col-lg-4 mr-5'>
               <img src={state} className='img-fluid'/>
          </div>
          <div className='col-lg-4'>
               <Detail/>
          </div>
      </div>
    </div>
  )
}

export default Product
