import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Make an API call to fetch product data from localhost:5000/products
    axios
      .get("http://localhost:5000/students")
      .then((response) => {
        console.log(response.data);
        setStudents(response.data.students);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to ensure the API call runs only once

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h3>Students</h3>
        <Link to="/add-student">
          <button className="btn btn-primary">Add Student</button>
        </Link>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>student Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Top_length</th>
            <th>Top_width</th>
            <th>Bottom_length</th>
            <th>Bottom_width</th>
            <th>ProductName</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((product) => (
            <tr key={product.student_id}>
              <td>{product.student_id}</td>
              <td>{product.student_name}</td>
              <td>{product.age}</td>
              <td>{product.gender}</td>
              <td>{product.CLASS}</td>
              <td>{product.top_length}</td>
              <td>{product.top_width}</td>
              <td>{product.bottom_length}</td>
              <td>{product.bottom_width}</td>
              <td>{product.product_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
