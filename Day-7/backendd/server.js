//to start the server 
//to connect the database
require('dotenv').config();
const app = require('./src/app');
const connectToDB = require('./src/config/database');

connectToDB();


app.listen(3000, () => {
    console.log('server is running on port 3000');
})