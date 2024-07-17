const express = require('express');
const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser())
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.listen(serverConfig.PORT, async() => { 
    await connectDB();
    console.log(`Server started at port ${serverConfig.PORT}...!`);
})

app.use('/user' , userRouter);
app.use('/auth', authRouter);

app.get('/ping', (req,res) => {
    console.log(req.body);
    console.log(req.cookies);
    return res.json({
        message: "pong"
    });
})