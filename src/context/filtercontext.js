import React, { useState, createContext } from "react";
import { useContext } from "react";

const Filtercontext = createContext();

const FilterProvider=({children})=>{
   const[filter,setfilter]=useState({
    maincategory:"",
    category:[],
    color:[],
    price:[]
   })

   return(
    <Filtercontext.Provider value={[filter,setfilter]}>
        {children}
    </Filtercontext.Provider>
   )
}

const useFilter=()=>useContext(Filtercontext)

export {useFilter,FilterProvider,Filtercontext}