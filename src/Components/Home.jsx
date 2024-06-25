import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    const[state,setState] = useState({
      name:'',
      age:''
    })
    let{name,age} = state
    const[data,setData]=useState([])
    const handleChange = (e)=>{
      let {name,value} = e.target
      setState({...state, [name]:value})
    }
    const handleSubmit = (e)=>{
      e.preventDefault()
      axios.post('http://localhost:5000/students',state)
    }
    const getMethod = async ()=>{
      let getData = await axios.get('http://localhost:5000/students')
      setData(getData.data)

    }
    useEffect(()=>{
      getMethod()
    },[data])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder='Enter Name' value={name} onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="age" placeholder='Enter Age' value={age} onChange={handleChange}/>
        </div>
        <div>
          <button>Create</button>
        </div>
      </form>
   
      <div>
        {data.map((x) => {
          return (
            <div>
              <span>
                <h1>
                  <span style={{ display: "inline-block", minWidth: "180px" }}>
                    {x.name}
                  </span>

                  <Link to={`/edit/${x.id}`}>
                    <button>editPage</button>
                  </Link>
                  <Link to={`/delete/${x.id}`}>
                    <button>deletePage</button>
                  </Link>
                </h1>
                <h1>
                  <span style={{ display: "inline-block", minWidth: "180px" }}>
                    {x.age}
                  </span>
                  <Link to={`/edit/${x.id}`}>
                    <button>editPage</button>
                  </Link>
                  <Link to={`/delete/${x.id}`}>
                    <button>deletePage</button>
                  </Link>
                </h1>
              </span>
            </div>
          )
        })}
       
      </div>
                
    </div>
  )
}

export default Home