// Auth API (FEATURE)
function authenticate(token) {
  // NEW: Add expiration check
  if (!token.expire) return false;
  return token.valid === true;
}
