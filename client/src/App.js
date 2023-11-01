import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductTable from "./components/products";
import AddProductForm from "./components/addProduct";
import OrderTable from "./components/order";
import StudentTable from "./components/students";
import AddStudentForm from "./components/addStudent";
import Navbar from "./components/Navbar";
import AddSchoolForm from "./components/addSchools";
import SchoolsTable from "./components/schools";
import CreateOrder from "./components/createOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Routes>
        <Route path="/products" element={<ProductTable />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/add-student" element={<AddStudentForm />} />
        <Route path="/add-school" element={<AddSchoolForm />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/orders" element={<OrderTable />} />
        <Route path="/students" element={<StudentTable />} />
        <Route path="/schools" element={<SchoolsTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
