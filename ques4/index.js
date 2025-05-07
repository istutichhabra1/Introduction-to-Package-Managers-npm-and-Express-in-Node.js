const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
  res.json({ message: 'This is home page' });
});

app.get('/contactus', (req, res) => {
  res.json({ message: 'Contact us at contact@contact.com' });
});

app.get('/about', (req, res) => {
  res.json({ message: 'Welcome to the About page!' });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
