const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const productsRoute = require("./routes/productsRoute");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "praveen_sql",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.use(cors());
app.use(express.json()); // Use Express's built-in JSON body parser
app.use(express.urlencoded({ extended: true })); // Use Express's built-in URL-encoded body parser

// app.use("/api", productsRoute);

//get all product
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (error, results) => {
    if (error) {
      console.error("Error retrieving products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ products: results });
    }
  });
});
// add product
app.post("/add-product", async (req, res) => {
  const data = [
    req.body.product_id,
    req.body.product_name,
    req.body.image,
    req.body.price,
    req.body.min_order,
    req.body.product_type,
    req.body.school_id,
    req.body.bundel_id,
    req.body.available_quantity,
  ];

  try {
    // Assuming you have a database connection object

    // Insert data into the 'products' table
    const query =
      "INSERT INTO products (product_id,product_name, image, price, min_order, product_type, school_id, bundel_id, available_quantity) VALUES (?,?,?, ?, ?, ?, ?, ?, ?)";

    // const query =
    //   "INSERT INTO products (product_id, image,price, min_order, product_type, school_id, bundel_id,available_quantity) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const result = await db.query(query, data);
    console.log(result);
    // Respond with a success message
    res.json({ message: "Product added successfully" });
  } catch (error) {
    // Handle errors here
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//get all students
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (error, results) => {
    if (error) {
      console.error("Error retrieving products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ students: results });
    }
  });
});
// add student
app.post("/add-student", async (req, res) => {
  const data = [
    req.body.student_id,
    req.body.student_name,
    req.body.age,
    req.body.gender,
    req.body.class,
    req.body.top_length,
    req.body.top_width,
    req.body.bottom_length,
    req.body.bottom_width,
  ];

  try {
    // Assuming you have a database connection object

    // Corrected SQL query
    const query =
      "INSERT INTO students (student_id, student_name, age, gender, class, top_length, top_width, bottom_length, bottom_width) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const result = await db.query(query, data);
    console.log(result);
    // Respond with a success message
    res.json({ message: "Student added successfully" });
  } catch (error) {
    // Handle errors here
    console.error("Error adding Student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// add school
app.post("/add-school", async (req, res) => {
  const data = [
    req.body.school_id,
    req.body.school_name,
    req.body.principle_name,
    req.body.school_email,
    req.body.address,
    req.body.branch,
    req.body.city,
    req.body.cp1_name,
    req.body.cp1_phone,
    req.body.cp1_email,
  ];
  console.log(req.body);
  try {
    // Assuming you have a database connection object

    // Insert data into the 'products' table
    const query =
      "INSERT INTO school (school_id, school_name,principle_name,school_email,address, branch,city,cp1_name,cp1_phone,cp1_email) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)";

    const result = await db.query(query, data);
    // Respond with a success message
    res.json({ message: "School added successfully" });
  } catch (error) {
    // Handle errors here
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// all schools
app.get("/schools", (req, res) => {
  db.query("SELECT * FROM school", (error, results) => {
    if (error) {
      console.error("Error retrieving products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ schools: results });
    }
  });
});

//post order
app.post("/post-order", async (req, res) => {
  const data = [
    req.body.customer_id,
    req.body.school_id,
    req.body.bill_amount,
    req.body.delivery_status,
    req.body.payment_status,
  ];
  console.log(req.body);
  try {
    const query =
      "INSERT INTO school_order (customer_id, school_id, bill_amount, delivery_status, payment_status) VALUES (?, ?, ?, ?, ?)";

    const result = await db.query(query, data);
    // Respond with a success message
    res.json({ message: "Order Created" });
  } catch (error) {
    // Handle errors here
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// All orders
app.get("/orders", (req, res) => {
  db.query("SELECT * FROM school_order", (error, results) => {
    if (error) {
      console.error("Error retrieving products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ orders: results });
    }
  });
});
app.listen(5000, () => {
  console.log("Server is running at 5000");
});
