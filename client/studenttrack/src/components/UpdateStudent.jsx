import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const UpdateStudent = () => {

    const {id} = useParams()
    
     //data fields
  const [firstName, setFirstName] =useState('');
  const [lastName, setLastName] = useState('');
  const[bachelor, setBachelor] = useState('');
     
    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get("http://localhost:9000/api/singlestudent/"+id);
                console.log(response);
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setBachelor(response.data.bachelor)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])
     
    const navigate = useNavigate()
 
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:9000/api/updatestudent/'+id, {firstName, lastName, bachelor})
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return  ( 
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
  <div className="w-50 bg-white rounded p-3">
    <form onSubmit={handleUpdate}>
      <h2>Update Student</h2>
      <div className="mb-2">
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="">LastName</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="">Bachelor</label>
        <input
          type="text"
          placeholder="Enter Bachelor"
          className="form-control"
          value={bachelor}
          onChange={(e) => setBachelor(e.target.value)}
        />
      </div>
      <button className="btn btn-success" onClick={handleUpdate}>Update</button>
    </form>
  </div>
</div>
 );
}

export default UpdateStudent