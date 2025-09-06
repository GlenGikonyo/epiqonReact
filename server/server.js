const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const basicAuth = require('express-basic-auth');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(
  '/api/messages',
  basicAuth({
    users: { admin: 'password123' }, 
    challenge: true, 
    unauthorizedResponse: 'Unauthorized'
  }),
  require('./routes/messages') // mount messages route
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
