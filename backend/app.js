// import routes
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config(); 
var cors = require('cors');
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");




//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=> console.log("database connected"))
.catch((err)=>console.log((err)));

//MiddleWare

app.use(morgan('dev'));
app.use (bodyParser.json({limit:"5mb"}));
app.use (bodyParser.urlencoded({
    limit:"5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());

//routes called from authRoutes
app.use('/', authRoutes);
//routes called from userRoute
app.use('/', userRoutes);

//error middleware
app.use(errorHandler)

//PORT
const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`server running on port ${port}`);
});