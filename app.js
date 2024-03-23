const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set up static files (Bootstrap CSS, JS, etc.)
app.use(express.static('public'));

// Route to render the dynamic webpage
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
 const port = 2255;
// app.listen(port, () => {
//     console.log(`Server started on http://localhost:${port}`);
  
// });

app.listen(port);