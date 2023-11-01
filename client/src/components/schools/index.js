import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SchoolsTable() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    // Make an API call to fetch product data from localhost:5000/products
    axios
      .get("http://localhost:5000/schools")
      .then((response) => {
        setSchools(response.data.schools);
        console.log(response.data.schools);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to ensure the API call runs only once

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h3>Schools</h3>
        <Link to="/add-school">
          <button className="btn btn-primary">Add School</button>
        </Link>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>School ID</th>
            <th>School Name</th>
            <th>Principle Name</th>
            <th>School Email</th>
            <th>Address</th>
            <th>Branch</th>
            <th>City</th>
            <th>CP Name</th>
            <th>CP Phone</th>
            <th>CP Email</th>
          </tr>
        </thead>
        <tbody>
          {schools?.map((each) => (
            <tr key={each.school_id}>
              <td>{each.school_id}</td>
              <td>{each.school_name}</td>
              <td>{each.principle_name}</td>
              <td>{each.school_email}</td>

              <td>{each.address}</td>
              <td>{each.branch}</td>
              <td>{each.city}</td>
              <td>{each.cp1_name}</td>
              <td>{each.cp1_phone}</td>
              <td>{each.cp1_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SchoolsTable;
