import React, { useState } from "react";

function CreateOrder() {
  const data = [
    "customer Id",
    "school Id",
    "Bill Amount",
    "Delivery Status",
    "Payment Status",
  ];

  const [productData, setProductData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to your API using fetch or any other HTTP client
    fetch("http://localhost:5000/post-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Order Created");
        // Handle the API response here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div style={{ marginLeft: "40vw" }}>
      <h2>Place Order</h2>
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
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CreateOrder;
