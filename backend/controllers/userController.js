const User = require('../models/userModels');
const ErrorResponse = require('../utils/errorResponse');

// load all users
exports.allUsers = async (req, res, next)=>{
    // enable pagination
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const count = await User.find({}).estimatedDocumentCount();
    try {
        // createdAt: -1 mean start to count at the end
        const users = await User.find().sort({createdAt: -1}).select('-password')
        .skip(pageSize * (page -1))
        .limit(pageSize)
        
        res.status(200).json({
            success: true,
            users,
            page,
            pages : Math.ceil(count / pageSize),
            count
    })
    next();
    } catch (error) {
        return next(error); 
    }
}

// single user
exports.singleUser = async (req, res, next) =>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        return next(error);
    }
}

// edit user
exports.editUser = async (req, res, next) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        return next(error);
    }
}
// delete user
exports.deleteUser = async (req, res, next) =>{
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success: true,
            message: "user deleted"
        })
    } catch (error) {
        return next(error);
    }
}