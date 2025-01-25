const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

//check if user is authenticated

exports.isAuthenticated = async (req, res, next) =>{
    const { token } = req.cookies;
    // make sure if token exist
    if(!token){
        return next(new ErrorResponse ('Not authorize to access this route', 401));
    }
    try {
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        return next(new ErrorResponse('Not authorize to access this route', 401));
    }
}

// middleware for admin
exports.isAdmin = (req, res, next)=>{
    if(req.user.role=== 0){
        // role === 0 mean that is not an admin
        return next(new ErrorResponse('Access denied, only admin can access', 401));
    }
    next(); 

}