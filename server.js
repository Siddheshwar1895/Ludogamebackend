const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Your routes
app.get('/api/start', (req, res) => {
  res.json({ message: "Ludo backend is working!" });
});

// Use the PORT from environment or default to 10000
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
// Node.js Server Entry Point
