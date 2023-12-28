import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const ViewSingleStu = () => {
  
  let [student,setStudent] = useState('')

  let { id } = useParams()

  let navigate = useNavigate();

  let getApi = async () => {
    let {data} = await axios.get("http://localhost:5000/student/"+id);
    console.log(data)
    setStudent(data)
  }

  console.log("the student array contains  ",student)

  useEffect(()=>{
    getApi();
  },[])
  
  let goback = () => {
    navigate(-1)
  }

  let gohomepage = () => {
    navigate("/")
  }

  return (
    <>
        <div className='viewsinglestu-container'>
        <h1 className='singleempheading'>Information of {student.stuname}</h1>
        <article className='singlestucontainer'>
          <h3 className='subcontainer'>
            <span className='heading'>Student name :</span> <span className='content'>{student.stuname}</span>
          </h3>
          <h4 className='subcontainer'><span className='heading'>ID : {student.id}</span></h4>
          <h3 className='subcontainer'><span className='heading'>Student email :</span> <span className='content'>{student.stuemail}</span></h3>
          <div className='buttonBlock'>
            <button onClick={goback}>Go back</button>
            <button onClick={gohomepage}>Home page</button>
          </div>
        </article>
        </div>
    </>
  )
}

export default ViewSingleStu
