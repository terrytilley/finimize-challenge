const express = require('express');
const app     = express();
const path    = require('path');
const logger  = require('morgan');
const port    = process.env.PORT || 3000;

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`));

// View Engine
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('pages/index');
});
