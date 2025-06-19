
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Example endpoint
app.get('/', (req, res) => {
  res.send('Ludo backend is running!');
});

// ✅ Use Render-provided port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
