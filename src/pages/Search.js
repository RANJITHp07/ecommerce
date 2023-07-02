import React,{useState,useEffect} from 'react'
import Navbar from '../component/Navbar/Navbar'
import Filter from '../filter/Filter'
import { useParams } from 'react-router'
import axios from 'axios'
import Card from '../component/Cards/Card';


function Search() {
    const {slugname}=useParams()
    const [category,setcategory]=useState({})
    useEffect(()=>{
        async function fetch(){
             try{
                const res=await axios.get(`/product/${slugname}`)
                setcategory(res.data.message[0])
              
             }
             catch(err){
                console.log(err)
             }
        }
        fetch()
        console.log(category?category.photo[0]:null)
    })
  return (
    <div>
      <Navbar/>
      <div className='row mt-5 ml-2'>
        <div className='col-lg-3'>
            <Filter categorytype={category?.maincategory}/>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  )
}

export default Search
