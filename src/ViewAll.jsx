import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ViewAll = () => {
  
  let [student,setStudent] = useState([])

  // let navigate = useNavigate()

  let getApi = async () => {
    let {data} = await axios.get("http://localhost:5000/student");
    console.log(data);
    setStudent(data)
  }


  useEffect(() => {
    try {
      getApi();
    } catch (e) {
      console.log(e)
    }
  },[])

  let deletestu = (id) => {
    console.log(id)
    axios.delete("http://localhost:5000/student/"+id)
    window.location.assign("/viewall")
  }
  
  return (
    <>
        <Navbar />
        <div className='table-container'>
          <div>
          <h1 className='table-container heading'>All Student's Details </h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Name</th>
                <th>Email</th>
                <th colSpan={3}>Options</th>
              </tr>
            </thead>
            <tbody>
              {student.map((val)=>{
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.stuname}</td>
                    <td>{val.stuemail}</td>
                    <td>
                      <NavLink to={`/editstu/${val.id}`}>
                        <button className='editbtn'>EDIT</button>
                      </NavLink>
                    </td>
                    <td><button className='deletebtn' onClick={()=>deletestu(val.id)}>DELETE</button></td>
                    <td>
                      <NavLink to={`/viewSingle/${val.id}`}>
                      <button className='viewbtn'>VIEW MORE</button>
                      </NavLink>
                    </td>
                      
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>


    </>
  )
}

export default ViewAll
