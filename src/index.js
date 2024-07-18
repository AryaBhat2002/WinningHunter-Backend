const express = require('express');
const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const uploader = require('./middlewares/multerMiddleware');
const cloudinary = require('./config/cloudinaryConfig');
const fs = require('fs/promises')

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

app.post('/photo', uploader.single('incomingFile'), async (req,res) => {
    console.log(req.file);
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log("Result from couldinary",result);
    await fs.unlink(process.cwd() + "/" + imagePath);
    return res.json({message: 'ok'})
})

app.get('/ping', (req,res) => {
    console.log(req.body);
    console.log(req.cookies);
    return res.json({
        message: "pong"
    });
})