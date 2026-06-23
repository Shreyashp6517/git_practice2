// Database connection
const mongoose = require('mongoose');

function connect() {
  mongoose.connect('mongodb://localhost/users');
}
