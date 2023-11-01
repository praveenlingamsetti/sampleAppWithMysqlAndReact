import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function OrderTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Make an API call to fetch product data from localhost:5000/products
    axios
      .get("http://localhost:5000/orders")
      .then((response) => {
        console.log(response.data);
        setStudents(response.data.orders);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to ensure the API call runs only once

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h3>Orders</h3>
        <Link to="/create-order">
          <button className="btn btn-primary">Create Order</button>
        </Link>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>order Id</th>
            <th>customer Id</th>
            <th>School Id</th>
            <th>bill Amount</th>
            <th>Delivery Status</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((product) => (
            <tr key={product.order_id}>
              <td>{product.order_id}</td>
              <td>{product.customer_id}</td>
              <td>{product.school_id}</td>
              <td>{product.bill_amount}</td>
              <td>{product.delivery_status}</td>
              <td>{product.payment_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
