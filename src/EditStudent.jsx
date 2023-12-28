import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'


const EditStudent = () => {
  
  let [stu,setStu] = useState({
    stuname: "",
    stuemail:""
  })
  
  let navigate = useNavigate()

  let { id } = useParams()
  console.log(id)

  let getApi = async () => {
    let {data} = await axios.get("http://localhost:5000/student/"+id)
    console.log(data)
    setStu(data)
}

  useEffect(()=>{
    getApi()
  },[])

  let {stuname, stuemail} = stu

  let handleChange = (event) => {
    console.log(event.target)
    let {name,value} = event.target
    setStu({...stu,[name]:value})
  }

  let handleSubmit = (event) => {
    event.preventDefault()
    console.log(stu);
    try {
      if(stuname === "" && stuemail === ""){
        alert('Please enter you name and email')
      }
      else if(stuname===""){
        alert('The name field is empty, please enter your name')
      }
      else if(stuemail === ""){
        alert('The email field is empty, please enter your email')
      }
      else{
        let payload = {
          stuname,
          stuemail,
        };
        axios.put("http://localhost:5000/student/"+id,payload)
        navigate("/viewall")
      }
      
    }
    catch(e) {
      console.log(e);
    }
    finally{
        setStu({stuname:"",stuemail:""})
    }
  }

  return (
    <>
        <Navbar />
        <div className='container'>
        <section className='stuform'>
          <h1>EDIT THE DETAILS OF STUDENT HERE</h1>
          <br />
          <form onSubmit={handleSubmit} className='formBlock'>
            <legend>UPDATE STUDENT</legend>
            <br />
            <div>
              <label htmlFor="sname">Student Name :</label>
              <input id='sname' type="text" placeholder='Enter students Mame' 
              value={stuname} 
              name='stuname' 
              onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <label htmlFor="semail">Student Email :</label>
              <input id='semail' type="email" placeholder='Enter students Email' 
              value={stuemail} 
              name='stuemail' 
              onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <button>UPDATE STUDENT</button>
            </div>
          </form>
        </section>
        </div>
    </>
  )
}

export default EditStudent
