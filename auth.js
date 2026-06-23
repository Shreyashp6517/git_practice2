// User authentication module (FEATURE VERSION)
function login(username, password) {
  console.log(`Logging in ${username} - FEATURE`);
  // DIFFERENT: Use bcrypt instead
  const bcrypt = require('bcrypt');
  bcrypt.hash(password, 10, (err, hash) => {
    console.log('Password hashed');
  });
  return true;
}
