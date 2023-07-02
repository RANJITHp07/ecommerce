import React, { useRef,useEffect,useState } from 'react'
import axios from 'axios'
import { Add,Cancel } from '@mui/icons-material'

function Createproduct() {

  const user=JSON.parse(localStorage.getItem("User"))
  const [color,setcolor]=useState([])
  const [categories,setcategories]=useState([])
  const [reference,setreference]=useState()
  const [file1,setfile1]=useState(null)
  const [file2,setfile2]=useState(null)
  const [file3,setfile3]=useState(null)
  const [item,setitem]=useState([])
  const [id,setid]=useState()

  

    const price=useRef()
    const quantity1=useRef()
    const quantity2=useRef()
    const quantity3=useRef()
    const quantity=useRef()
    const productname=useRef()
    const desc=useRef()
    const maincategory=useRef()
    const category=useRef()
    const colour=useRef()

    useEffect(()=>{
      async function fetch(){
           const res=await axios.get("/category/getall")
           setitem(res.data.message)
      }
      fetch()
  },[user.token])

  
  const fetchdata = async () => {
    const responses = await Promise.all(
      categories.map(async (c) => {
        try {
          const response = await axios.get(`/category/${c}`, {
            headers: {
              Authorization: user.token,
            },
          });
          return response.data.message._id;
        } catch (err) {
          console.log(err);
          return null;
        }
      })
    );
    setid(responses.filter((id) => id !== null));
  };
 

    const handleSubmit=async (e) => {
      e.preventDefault();
      fetchdata()
      const newproduct = {
        username: productname.current.value,
        price: parseInt(price.current.value),
        maincategory: maincategory.current.value,
        category: [id],
        color: color,
        desc: desc.current.value
      };
      
      if (maincategory.current.value === 'Cloth') {
        newproduct.size = [
          { quantity: parseInt(quantity1.current.value), size: "Small" },
          { quantity: parseInt(quantity2.current.value), size: "Medium" },
          { quantity: parseInt(quantity3.current.value), size: "Large" }
        ];
      }

      if(maincategory.current.value==='Watch'){
        newproduct.quantity= parseInt(quantity.current.value)
      }
      console.log(newproduct.quantity)
      
      if(file1&& file2 && file3){
        const data1 = new FormData();
    const fileName1 = Date.now() + file1.name;
    data1.append("img2", file1, fileName1);
    data1.append("name", fileName1);

    const data2 = new FormData();
    const fileName2 = Date.now() + file2.name;
    data2.append("img2", file2, fileName2);
    data2.append("name", fileName2);

    const data3 = new FormData();
    const fileName3 = Date.now() + file3.name;
    data3.append("img3", file3, fileName3);
    data3.append("name", fileName3);
    newproduct.photo = [fileName1, fileName2, fileName3];
        
      try{
        await axios.post("/upload/image1", data1)
        await axios.post("/upload/image2", data2)
        await axios.post("/upload/image3", data3)
        console.log(newproduct)
      }catch(err){
        console.log(err)
      }
    }
      try{
        await axios.post('/product/create',newproduct, {headers: {
          Authorization: user.token,
        },
      })
        window.location.reload()
      }catch(err){
        console.log(err)
      }
  };
    
  return (
    <div className='p-5'>
       <form onSubmit={handleSubmit}>
       <input className='form-control mb-3' type='text' placeholder='Product name' ref={productname} required/>
       <div className="row mb-3 mt-3">
  <div className="col-lg-6">
  <select class="form-control mb-3" ref={maincategory} onChange={(e)=>{setreference(e.target.value)}}>
    <option>Watch</option>
    <option>Cloth</option>
    <option>Shoe</option>
  </select>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Price"  ref={price} required />
  </div>
</div>
<div className='row mb-3'>
<select class="form-control mb-3 col-lg-7 mr-3 ml-3" ref={category}>
{
  item.map((i)=>(
    <option key={i._id}>{i.slug}</option>
  ))
}
</select>
<button className='btn btn-success btn-sm' onClick={()=>{setcategories([...categories,category.current.value])}}>Add</button>
</div>
 <ul>
   {
     categories.map((c)=>(
      <li>{c}</li>
     ))
   }
 </ul>
{(reference==='Cloth'|| reference==='Shoe') ?<>
<div className='row mb-3'> 
     <div className='col-lg-3'>
       <input className='form-control' placeholder='items in size "SMALL" ' ref={quantity1}/>
     </div>
     <div className='col-lg-3'>
     <input className='form-control' placeholder='items in size "MEDIUM" 'ref={quantity2} />
     </div>
     <div className='col-lg-3'>
     <input className='form-control' placeholder='items in size "LARGE" ' ref={quantity3}/>
     </div>
  </div>
</> :
<>
<div className='mb-3 col-lg-8'>
     <input className='form-control' placeholder='Enter the no:of items' ref={quantity}/>
     </div>
  </>

}

<div className='row mb-3'>
<input className='form-control col-lg-8 ml-3' placeholder='Color' ref={colour}/>
 <button className='btn btn-success ml-3' onClick={()=>{setcolor([...color,colour.current.value])}}>Add</button>
</div>
 <ul>
   {
     color.map((c)=>(
      <li>{c}</li>
     ))
   }
 </ul>
<textarea className='form-control mb-3' placeholder='Description' style={{height:"5rem"}} ref={desc}/>
<label className='mr-3'>Photo of the product</label>
<br/> 
<input type='file' name='img1' className='mb-3'  onChange={(e) => setfile1(e.target.files[0])} />
         {
              file1 &&
              <div>
                <img className='img-fluid' style={{width:"10rem",height:"10rem"}} src={URL.createObjectURL(new Blob([file1], { type: file1.type }))}/>
                <Cancel className='float-right' onClick={()=>{
                    setfile1(null)
                }}/>
              </div>
            }
            <br/>
<input type='file' name='img2'  className='mb-3'  onChange={(e) => setfile2(e.target.files[0])} />
{
              file2 &&
              <div>
                <img className='img-fluid' style={{width:"10rem",height:"10rem"}} src={URL.createObjectURL(new Blob([file2], { type: file2.type }))}/>
                <Cancel className='float-right' onClick={()=>{
                    setfile2(null)
                }}/>
              </div>
            }
            <br/>
<input type='file' name='img3'  className='mb-3' onChange={(e) => setfile3(e.target.files[0])} />
{
              file3 &&
              <div>
                <img className='img-fluid' style={{width:"10rem",height:"10rem"}} src={URL.createObjectURL(new Blob([file3], { type: file3.type }))}/>
                <Cancel className='float-right' onClick={()=>{
                    setfile3(null)
                }}/>
              </div>
            }
            <br/>
 <button className='btn btn-success mt-3'>Submit</button>
       </form>
    </div>
  )
}

export default Createproduct
