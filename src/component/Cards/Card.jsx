import { Add, AddShoppingCartOutlined, FavoriteBorder, StarBorder } from '@mui/icons-material'
import { message } from 'antd'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/cartcontext'
import { Rate } from 'antd';

function Card({product,shop}) {
  const [cart,setcart]=useCart()
  const navigate=useNavigate()
  const click=(s)=>{
        if(cart.some((c)=>c._id===s._id)){
          message.success("Already added to the cart")
        }
        else{
        setcart([...cart,s])
        console.log(cart)
          localStorage.setItem("Cart",JSON.stringify([...cart,s]))
        }
  }


  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [value, setValue] = useState(3);
  

  return (
  <div className="card m-3" style={{width: '18rem'}}>
  <img className="card-img-top img-fluid" style={{width:"18rem",maxHeight:"18rem"}} src={"/images/"+shop.photo[0]} alt="Card image cap" />
  <div className="card-body">
 {product?"":<span className='float-right'><FavoriteBorder/></span>} 
    <p className="card-text"><b>{product?product.username.slice(0,25)+"...":shop.username.slice(0,25)+"..."}</b><br/>${product?product.price:shop.price}</p>
    <div className='mb-3' >
      <Rate tooltips={desc} onChange={setValue} value={value} style={{fontSize:"1rem"}} />
      {value ? <span className="ant-rate-text" style={{fontSize:"0.8rem"}}>{desc[value - 1]}</span> : ''}
    </div>
    <p>{product?product.desc.slice(0,50):shop.desc.slice(0,50)}...</p>
    <span className='mt-3'><button className='btn btn-outline-success'>{product?"Update the product":"Shop now"}</button></span>
    {product?"":<span className='float-right' onClick={()=>{click(shop)}}><AddShoppingCartOutlined/></span>}
  </div>
</div>



  )
}

export default Card
