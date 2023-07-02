import { ArrowBack, ArrowForward } from '@mui/icons-material'
import React from 'react'
import Card from '../component/Cards/Card'
import Header from '../component/Header/Header'
import Items from '../component/Items/Items'
import Navbar from '../component/Navbar/Navbar'
import Serivces from '../component/Services/Serivces'
import { useAuth } from '../context/authcontext'

function Home() {
  const [click]=useAuth()
  return (
    <div>
      <Navbar/>
      <Header/>
      <Items/> 
    <Serivces/>
    </div>
  )
}

export default Home
