
const ErrorResponse = require ("../utils/errorResponse");
const errorHandler = (err,req,res,next)=>{
    let error = {...err};
    err.message = err.message;

    if(error.name==="CastError"){
        const message = `Ressource not found ${err.value}`;
        error = new ErrorResponse(message, 404);
    }
//Mongoose duplicate value
    if(error.code===11000){
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, 400);//400 to mean we don't autorize
    }

    //Mongoose validation error
    if(error.name==="validationError"){
        const message = Object.value(err.errors).map(val=> ' ' + val.message);
        error = new ErrorResponse(message, 400);
    }
//500 to mean server error
    res.status(error.codeStatus || 500).json({
        success : false,
        error: error.message || "server error"
    })
}
module.exports = errorHandler