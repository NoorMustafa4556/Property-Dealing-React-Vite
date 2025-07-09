const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydatabase"
});


app.get("/", (req, res) => {
    const sql = "SELECT * FROM properties_detail";
    db.query(sql, (err, data) => {
        if (err) return res.json('This is an error');
        return res.json(data);
    });
});


app.post("/add", (req, res) => {
    console.log("Received data:", req.body);
    const { property_type, size, nature, owner_name, price, email, demand } = req.body;

    const sql = "INSERT INTO properties_detail (property_type, size, nature, owner_name, price, email, demand) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [property_type, size, nature, owner_name, price, email, demand], (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: err.message });
        }
        return res.json({ message: "Property added successfully" });
    });
});


app.delete("/delete/:id", (req, res) => {
    const propertyId = req.params.id;

    const sql = "DELETE FROM properties_detail WHERE id = ?";
    db.query(sql, [propertyId], (err, data) => {
        if (err) {
            console.error("Error deleting property:", err);
            return res.status(500).json({ error: err.message });
        }
        return res.json({ message: "Property deleted successfully" });
    });
});

app.put("/update/:id", (req, res) => {
    const propertyId = req.params.id;
    const { property_type, size, nature, owner_name, price, email, demand } = req.body;

    const sql = "UPDATE properties_detail SET property_type = ?, size = ?, nature = ?, owner_name = ?, price = ?, email = ?, demand = ? WHERE id = ?";
    db.query(sql, [property_type, size, nature, owner_name, price, email, demand, propertyId], (err, data) => {
        if (err) {
            console.error("Error updating property:", err);
            return res.status(500).json({ error: err.message });
        }
        return res.json({ message: "Property updated successfully" });
    });
});


app.listen(3001, () => {
    console.log('Server has started on http://localhost:3001');
});