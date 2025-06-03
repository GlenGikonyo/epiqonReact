const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/messages', require('./routes/messages'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// This code sets up a basic Express server with CORS and JSON parsing middleware.
// It connects to a MongoDB database using Mongoose and defines routes for handling messages and authentication.
// The server listens on a specified port, defaulting to 5000 if not defined in the environment variables.
// The code also uses dotenv to load environment variables from a .env file, which is useful for managing sensitive information like database connection strings.
// The server is structured to handle API requests, making it suitable for a web application backend.
// The code does not include any frontend components or HTML structure, focusing solely on the server-side functionality.
// The server is ready to handle requests for messages and authentication, which can be expanded with additional routes and functionality as needed.
