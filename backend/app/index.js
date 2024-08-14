const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise"); // Using promise-based API
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());

const pool = mysql.createPool({
  host: "mysql",
  user: "my_user",
  password: "my_password",
  database: "my_database",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(bodyParser.json());

// API endpoint to fetch bookings
app.get("/api/bookings", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM bookings");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/bookings/:bookingId", async (req, res) => {
  const { bookingId } = req.params;
  const query = "SELECT * FROM bookings WHERE id = ?";

  try {
    const [rows] = await pool.query(query, [bookingId]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).send("Booking not found");
    }
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).send("Internal Server Error");
  }
});

// API endpoint to insert a booking
app.post("/api/bookings", async (req, res) => {
  const { service, doctor_name, start_time, end_time, date } = req.body;
  const insertQuery =
    "INSERT INTO bookings (service, doctor_name, start_time, end_time, date) VALUES (?, ?, ?, ?, ?)";

  try {
    await pool.query(insertQuery, [
      service,
      doctor_name,
      start_time,
      end_time,
      date,
    ]);
    res.status(201).send({ message: "Booking inserted successfully" });
  } catch (error) {
    console.error("Error inserting booking:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
