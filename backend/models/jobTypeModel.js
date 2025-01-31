const mongoose = require('mongoose');
const { objectId } = mongoose.Schema;


const jobTypeSchema = new mongoose.Schema({
    jobTypeName : {
        type : String,
        trim : true,//to add space
        required:[true,'Category job required'],
        maxlength:70,
    },
    user : {
        type : objectId,
        ref : "User",
        required : true
    },
  
},{timestamps:true}) //to get a date and update

module.exports = mongoose.model("JobType", jobTypeSchema);