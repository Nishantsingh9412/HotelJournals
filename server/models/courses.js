import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    title: {type:String,require:true},
    description : {type:String,require:true},
    company_name : {type:String,require:true},
    price: { type: Number, require: true },
    isFree : {type:Boolean, default:false},
    course_link : {type:String,require:true},
    format: {type:String,require:true},
    languages : {type:[String],require:true},
    duration : {type:String,require:true},
    banner_image:{type:String,require:true},
    brand_image : {type:String,require:true}
});

export default mongoose.model('Courses',courseSchema);