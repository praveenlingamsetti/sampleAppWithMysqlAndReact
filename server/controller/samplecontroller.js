const db = require("../index");

const addProduct = async (req, res) => {
  // const { product_id, gender, length_range, width_range, type, size, description } = req.body;
  const data = [
    req.body.product_id,
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
      "INSERT INTO products (product_id, image, price, min_order, product_type, school_id, bundel_id, available_quantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

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
};

const getAllProducts = async (req, res) => {
  try {
    // Assuming you have a database connection object

    // Select all products from the 'products' table
    const query = "SELECT * FROM products";
    const products = await db.query(query);

    // Respond with the list of products
    res.json({ products });
  } catch (error) {
    // Handle errors here
    console.error("Error retrieving products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
};
