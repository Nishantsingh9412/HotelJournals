import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    title: {type:String,required:true},
    description : {type:String,required:true},
    company_name : {type:String,required:true},
    price: { type: String, required: false},
    isFree : {type:Boolean, default:false , required:true},
    difficulty : {type:String,required:true},
    course_link : {type:String,required:true},
    format: {type:String,required:true},
    languages : {type:[String],required:true},
    duration : {type:String,required:true},
    banner_image:{type:String,required:true},
    brand_image : {type:String,required:true}
});

export default mongoose.model('Courses',courseSchema);