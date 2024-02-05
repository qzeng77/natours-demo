// separete express application and server
const app = require('./app');

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port: ${port}...`);
});

// npm start (so whatever nodemon app.js or nodemon server.js, it was be set up on package.json)
