import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Delete = () => {
  let navigate = useNavigate()
  let[data,setData]=useState({
    name:'',
    age:''
  })
 
  let {id}=useParams()
   const getMethod= async ()=>{
    let fetcheddata =await axios.get(`http://localhost:5000/students/${id}`)
    setData(fetcheddata.data)
   }
   useEffect(()=>{
    getMethod()
   },[])
   const handleDelete= async ()=>{
    await axios.delete(`http://localhost:5000/students/${id}`)
    navigate('/')
   }
  return (
    <div>
       {data.name} <button onClick={handleDelete}>Delete</button>
        {data.age} <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Delete