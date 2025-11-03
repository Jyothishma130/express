require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

app.get('/', (req, res) => {
  res.send("Hello Jyothishma! MongoDB connection is successful");
});

app.post('/api/notes', (req, res) => {
  res.send(req.body);
  console.log("Data received:", req.body);
});

