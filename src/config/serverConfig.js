const dotenv = require('dotenv');
dotenv.config();

//here we are exporing all the env variables tha the project uses
module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY,
    COOKIE_SECURE: process.env.COOKIE_SECURE
};