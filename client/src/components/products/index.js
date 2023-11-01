import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an API call to fetch product data from localhost:5000/products
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to ensure the API call runs only once

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h3>Product List</h3>
        <Link to="/add-product">
          <button className="btn btn-primary">Add product</button>
        </Link>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Product ID</th>
            <th>Price</th>
            <th>Minimum Order</th>

            <th>Product Type</th>
            <th>School ID</th>
            <th>Bundle ID</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.price}</td>
              <td>{product.min_order}</td>

              <td>{product.product_type}</td>
              <td>{product.school_id}</td>
              <td>{product.bundel_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
