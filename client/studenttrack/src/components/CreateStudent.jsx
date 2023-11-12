import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateStudent = () => {

  //data fields
  const [firstName, setFirstName] =useState('');
  const [lastName, setLastName] = useState('');
  const[bachelor, setBachelor] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:9000/api/createstudent', {firstName, lastName, bachelor})
    .then(res => {
        console.log(res);
        navigate('/')
    })
    .catch(err => console.log(err))
}

return (
  <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <form onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className="mb-2">
          <label htmlFor="">FirstName</label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">LastName</label>
          <input
            type="text"
            placeholder="Enter LastName"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Bachelor</label>
          <input
            type="text"
            placeholder="Enter Bachelor"
            className="form-control"
            onChange={(e) => setBachelor(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  </div>
);
}

export default CreateStudent