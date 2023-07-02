import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../component/Cards/Card';
import Navbar from '../component/Navbar/Navbar'
import {  useFilter } from '../context/filtercontext';
import Filter from '../filter/Filter'

function Category() {
  const user=JSON.parse(localStorage.getItem("User"))
  const [product,setproduct]=useState([])
  const [filter]=useFilter()
  console.log(filter)
  const {productType}=useParams();
  console.log(productType)

  useEffect(() => {
    async function fetch() {
      try{
        const res=await axios.get(`/product/get/${productType}`)
        setproduct(res.data.message)
        console.log(res.data.message)
      } catch(err) {
        console.log(err)
      }
    }
    fetch()
  }, [productType, user?.token])

  /*useEffect(() => {
    async function fetchdata() {
      try {
        const res=await axios.get(`/product/filter?maincategory=${filter.maincategory}&color=${filter.color}&category=${filter.category}&price=${filter.price}`)
        console.log(res.data)
        setproduct(res.data.message)
      } catch(err) {
        console.log(err)
      }
    }
    if (filter && user?.token) {
      fetchdata();
    }
  }, [filter, user?.token])*/

  console.log(filter.color)
  return (
    <div>
      <Navbar/>
      <div className='row mt-5 ml-2'>
        <div className='col-lg-3'>
          <Filter categorytype={productType}/>
        </div>
        <div className='col-lg-9'>
          <div className='row'>
            {product.map((s) => (
              <div className='col'>
                <Card key={s.id} shop={s}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
