const express = require('express');
const app = express();
const db = require('./src/db/DataBaseConfig'); // db.js
const port = 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Node + MySQL 8.0+ server is running');
});

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, dob, phone, email, password } = req.body;

    // ✅ Basic validation
    if (!firstName || !lastName || !dob || !phone || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const query = `
      INSERT INTO users (first_name, last_name, dob, phone, email, password)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(query, [
      firstName,
      lastName,
      dob,
      phone,
      email,
      password,
    ]);

    res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Info:: Write mysql password in db File - Server is running at http://localhost:${port}`);
});
