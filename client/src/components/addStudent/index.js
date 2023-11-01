import React, { useState } from "react";

function AddStudentForm() {
  const data = [
    "student_id",
    "student_name",
    "age",
    "gender",
    "class",
    "top_length",
    "top_width",
    "bottom_length",
    "bottom_width",
    "product_name",
  ];

  const [productData, setProductData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to your API using fetch or any other HTTP client
    fetch("http://localhost:5000/add-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("School Successfully added");
        console.log(data); // Handle the API response here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div style={{ marginLeft: "40vw" }}>
      <h2>Add a New Student</h2>
      <form onSubmit={handleSubmit}>
        {data.map((field) => (
          <div className="mb-3 col-3" key={field}>
            <input
              type="text"
              className="form-control"
              placeholder={field}
              name={field}
              value={productData[field] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudentForm;
