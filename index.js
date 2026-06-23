const express = require('express');
const app = express();
// NEW: Add route endpoint (teammate's change)
app.get('/api/users', (req, res) => {
  res.json({ message: 'Users endpoint' });
});

app.listen(3000);
