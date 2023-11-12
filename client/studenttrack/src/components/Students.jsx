import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Students = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/allstudents')
      .then(res => {
        console.log(res.data); 
        setData(res.data.students);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9000/api/deletestudent/${id}`)
      .then(res => {
        console.log(res);
        // Silme işlemi başarıyla tamamlandığında sayfayı yenileme
        setData(prevData => prevData.filter(user => user._id !== id));
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success btn-sm"> Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Bachelor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <tr key={student._id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.bachelor}</td>
                <td>
                  <Link to={`/edit/${student._id}`} className="btn btn-sm btn-success me-2">
                    Update
                  </Link>
                  <button onClick={() => handleDelete(student._id)} className="btn btn-sm btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
