const dotenv = require('dotenv');
dotenv.config();

//here we are exporing all the env variables tha the project uses
module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
}