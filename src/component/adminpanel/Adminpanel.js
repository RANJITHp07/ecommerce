import {Delete, Edit } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useRef ,useState} from 'react'
import { ExclamationCircleFilled } from '@ant-design/icons';
import {message, Modal} from 'antd';

const { confirm } = Modal;

function Adminpanel() {

 const updatecategory=useRef()
 const user=JSON.parse(localStorage.getItem("User"))
  const showDeleteConfirm =async (deletes) => {
    confirm({
      title: 'Are you sure you want to delete this category?',
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
       async onOk() {
        console.log("ok")
         try{
        await axios.delete(`/category/delete/${deletes._id}`,{headers:{
          Authorization:user.token
      }})
      window.location.reload()
         }catch(err){
          console.log(err)
         }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
    
  }

  const showPropsConfirm = (confirms) => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleFilled />,
      content: <input type='text' placeholder='Category' className='form-control' ref={updatecategory} />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
         try{
          await axios.put(`/category/update/${confirms._id}`,{name:updatecategory.current.value,slug:updatecategory.current.value},
          {headers:{
            Authorization:user.token
        }}
        )
        window.location.reload()
         }catch(err){
          console.log(err)
         }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  
    const [item,setitem]=useState([])
    const category=useRef()
    const maincategory=useRef()
    const click= async()=>{
           try{
             const res=await axios.post("/category",{maincategory:maincategory.current.value,name:category.current.value},{headers:{
              Authorization:user.token
          }}          
          )
          message.success("CATEGORY SUCCESFULLY ADDED")
          window.location.reload()
           }catch(err){
            console.log(err)
           }
    }
     
    useEffect(()=>{
        async function fetch(){
             const res=await axios.get("/category/getall",{headers:{
              Authorization:user.token
          }})
             setitem(res.data.message)
             console.log(res.data.message)
        }
        fetch()
    },[user.token])

  return (
    <div className='ml-5'>
       <select class="form-control mb-3 mt-3 col-lg-3" ref={maincategory}>
    <option>Watch</option>
    <option>Cloth</option>
    <option>Shoe</option>
  </select>
       <div className='row mb-3'>
         <input className='form-control col-6' placeholder='Categoryname' type='text' ref={category}/>
         <button className='btn btn-primary ml-3' onClick={()=>{click()}}>Add</button>
       </div>
       <div>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Category</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
  {
     item.map((i,index)=>(
        <tr key={i._id}>
      <th scope="row">{index+1}</th>
      <td>{i.slug}</td>
      <td><span className='mr-3' onClick={()=>{showDeleteConfirm(i)}}><Delete/></span><span onClick={()=>{showPropsConfirm(i)}}><Edit/></span></td>
    </tr>
     ))
  }
  </tbody>
</table>
       </div>
    </div>
  )
}

export default Adminpanel
