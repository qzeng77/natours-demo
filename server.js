const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

console.log(process.env.NODE_ENV);

// use port 3000 unless there exists a preconfigured port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port: ${port}...`);
});
