import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import { Slider } from 'antd';
import { useFilter } from '../context/filtercontext';

function Filter({categorytype}) {
  
   const [category,setcategory]=useState([])
   const [categories,setcategories]=useState([])
    const [price,setprice]=useState([])
    const[color,setcolor]=useState([])
    const [filter,setfilter]=useFilter()
    

    const onChange = (value) => {
      console.log('onChange: ', value);
    };
    
    const onAfterChange = (v) => {
      console.log('onAfterChange: ', v);
      setfilter({...filter,price:v})
    };
    useEffect(()=>{
      async function fetch(){
        try{
          const res=await axios.get(`http://localhost:8000/category/main/${categorytype}`)
          console.log(res.data.message)
          setfilter({...filter,maincategory:categorytype})
          setcategory(res.data.message)
        }catch(err){
          console.log(err)
        }
      }
      fetch()
    },[categorytype])
   useEffect(()=>{
    price.map(async(p)=>{
       const response=await axios.get(`/category/${p}`)
       console.log(response.data.message._id)
       setcategories([...categories,response.data.message._id])
   })
   
    setfilter({...filter,category:[categories],color:color})
   
   },[price,color])
  
  
  return (
    <div>
      <p><b>FILTER BY CATEGORY</b></p>
      {
        category.map((m)=>(
          <div>
          <input type='checkbox' value={m.slug}  onChange={(e)=>{if(!price.includes(e.target.value)){setprice([...price,e.target.value])}}} />
          <span className='ml-2'>{m.slug}</span>
           <br/>
           </div>
        ))
      }
      
      <div className='mt-3 ml-3'>
        <p><b>COLOR</b></p>
        <input type='radio' value="black" onChange={(e)=>{setcolor([...color,e.target.value])}}/>
        <span>Black</span>
        <br/>
        <input type='radio' value='blue' onChange={(e)=>{setcolor([...color,e.target.value])}}/>
        <span>Blue</span>
        <br/>
        <input type='radio' value='green' onChange={(e)=>{setcolor([...color,e.target.value])}}/>
        <span>Green</span>
        <br/>
        <input type='radio' value='green' onChange={(e)=>{setcolor([...color,e.target.value])}}/>
        <span>White</span>
        <br/>
        <input type='radio' value='orange' onChange={(e)=>{setcolor([...color,e.target.value])}}/>
        <span>Orange</span>
      </div>
      
       <div className='col-lg-6 mt-3'>
         <p><b>PRICE</b></p>
                  <Slider
  range={{ draggableTrack: true }}
  defaultValue={[20, 80]}
  min={0}
  max={10000}
  onChange={onChange} onAfterChange={onAfterChange}
/>
       </div>
       
    </div>
  )
}

export default Filter
