import React, { useState } from "react";

function AddProductForm() {
  const data = [
    "product_id",
    "product_name",
    "price",
    "min_order",
    "product_type",
    "school_id",
    "bundel_id",
    "available_quantity",
  ];

  const [productData, setProductData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to your API using fetch or any other HTTP client
    fetch("http://localhost:5000/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Product Successfully added");
        console.log(data); // Handle the API response here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div style={{ marginLeft: "40vw" }}>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        {data.map((field, index) => (
          <div className="mb-3 col-3" key={index}>
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
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
