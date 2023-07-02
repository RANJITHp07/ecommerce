import { Delete, Remove } from '@mui/icons-material'
import React, { useState } from 'react'
import { useCart } from '../../context/cartcontext'
import "./Cartcard.css"
import { Button, Modal, Space } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';


function Cartcard({p}) {
   const { confirm } = Modal;
  const [cart,setCart]=useCart()
  const [count,setcount]=useState(1);
  const [totalprice,settotalprice]=useState(0)
  const click=(id)=>{
   let mycart=[...cart]
   mycart=mycart.filter((e)=>e._id!==id)
     
     setCart(mycart)
     localStorage.setItem('Cart',JSON.stringify(cart))
  }
  const showDeleteConfirm = (id) => {
   confirm({
     title: 'Are you sure delete this task?',
     icon: <ExclamationCircleFilled />,
     content: 'Some descriptions',
     okText: 'Yes',
     okType: 'danger',
     cancelText: 'No',
     onOk() {
       click(id)
     },
     onCancel() {
       console.log('Cancel');
     },
   });
 };
  return (
    <div style={{width:"50rem",marginLeft:"5rem"}}>
    
       <div className='row'>
        <div className='cartproduct mt-3 ml-5'>
           <div className='card m-3 p-3'>
              <div className='row'>
              <div className='col'>
               <img src={"/images/"+p.photo[0]} className='img-fluid card-img-top' style={{width:"35rem",height:"14rem"}}/>
              </div>
              <div className='col-lg-7'>
              <div className='float-right'>
                    <button className='btn btn-primary' onClick={()=>
                    {setcount(count+1)
                      settotalprice(count*p.price)
                    }
                    }>+</button>
                    <span className='ml-2 mr-2'>{count}</span>
                    <button className='btn btn-primary' onClick={()=>{setcount(count==0?count:count-1)
                    settotalprice(count*p.price)
                    }}>-</button>
                    <p className='mt-2'>Price:{count*p.price}</p>
                 </div>
                 <h5><b>{p.username}</b></h5>
                 <p><b>${p.price}</b></p>
                 <p>Color:</p>
                 <p>Size:</p>
       
        <button className='float-right btn btn-danger' style={{alignText:"center"}} onClick={()=>{showDeleteConfirm(p._id)}}>Remove<Delete/> </button>
      
                 {console.log(totalprice)}
              </div>
              </div>
           </div>
           
        </div>
   
       </div>
    </div>
  )
}

export default Cartcard  
