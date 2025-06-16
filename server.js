require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/order');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/order', orderRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Server is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});