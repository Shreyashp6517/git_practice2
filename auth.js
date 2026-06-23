// User authentication module (MAIN VERSION)
function login(username, password) {
  console.log(`Logging in ${username} - MAIN`);
  // NEW: Add password validation
  if (!password || password.length < 6) {
    throw new Error('Password too short');
  }
  return true;
}
