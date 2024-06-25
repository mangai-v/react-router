import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    let{id}=useParams()
    let navigate = useNavigate()
    let [data,setData]=useState({
        name:'',
        age:''
    })
    let {name,age}=data
    const get = async ()=>{
    let fetchData  =  await axios.get(`http://localhost:5000/students/${id}`)
        setData(fetchData.data)
    }
    useEffect(()=>{
        get()
    },[])
    const handleChange = (e)=>{
        let{name,value}=e.target
        setData({...data,[name]:value})
    }
    const handleClick = async()=>{
        await axios.put(`http://localhost:5000/students/${id}`,data)
        navigate('/')
    }
    
  return (
    <div>
      <input type="text" name='name' value={name} onChange={handleChange}/>
      <input type="text" name='age' value={age} onChange={handleChange}/>
      <button onClick={handleClick}>Edit</button>
    </div>
  )
}

export default Edit