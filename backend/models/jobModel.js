const mongoose = require('mongoose');
const { objectId } = mongoose.Schema;


const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        trim : true,//to add space
        required:[true,'Title is required'],
        maxlength:70,
    },
    description : {
        type : String,
        trim : true,//to add space
        required:[true,'Description is required'],
    },
    salary : {
        type : String,
        trim : true,//to add space
        required:[true,'Salary is required'],
    },
    location : {
        type : String,
    },
    available : {
        type : Boolean,
        default : true
    },
    // link category which is jobType to jobModel
    jobType : {
        type : objectId,
        ref : "JobType",
        required : true
    },
    // to link jobModel to userModel
    user : {
        type : objectId,
        ref : "User",
        required : true
    },
  
},{timestamps:true}) //to get a date and update

module.exports = mongoose.model("Job", jobSchema);