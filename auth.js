// User authentication module (COMBINED)
const bcrypt = require('bcrypt');

function login(username, password) {
  console.log(`Logging in ${username}`);
  
  // Password validation
  if (!password || password.length < 6) {
    throw new Error('Password too short');
  }
  
  // Bcrypt hashing
  bcrypt.hash(password, 10, (err, hash) => {
    console.log('Password hashed');
  });
  
  return true;
}
