import Courses from "../models/courses.js";
import mongoose from "mongoose";

export const CoursesAdmin = async (req, res) => {
    try {
        const { title, description, company_name, price,
            isFree, course_link, format, languages, duration, banner_image, brand_image , 
            difficulty , course_category , course_type , created_by} = req.body;

        if (!title || !description || !company_name || !course_link || !format || !languages
            || !duration || !banner_image || !brand_image || !difficulty || !course_type || !course_category) {
            return res.status(400).json({ message: "Please Fill all the fields" })
        } else {
            const newCourse = await Courses.create({
                title, description, company_name, price, isFree,difficulty,course_link,
                format, languages, duration, banner_image, 
                brand_image , created_by, course_category , course_type 
            });
            res.status(201).json({ success: true, message: "Course Added Successfully", result: newCourse })
        }
    } catch (error) {
        console.log("Error From Courses Admin Controller", error.message);
        res.status(500).json({ success: false, message: `Something went wrong from server ${error.message}` })
    }
}

export const AllCourseData = async(req,res) => {
    try {
        const WholeCourses = await Courses.find();
        const allCoursesArray = [];
        WholeCourses.forEach(singleCourse => {
            allCoursesArray.push({
                _id:singleCourse._id,
                title:singleCourse.title,
                description:singleCourse.description,
                company_name:singleCourse.company_name,
                course_category:singleCourse.course_category,
                course_type:singleCourse.course_type,
                price:singleCourse.price,
                difficulty:singleCourse.difficulty,
                isFree:singleCourse.isFree,
                course_link:singleCourse.course_link,
                format:singleCourse.format,
                languages:singleCourse.languages,
                duration:singleCourse.duration,
                banner_image:singleCourse.banner_image,
                brand_image:singleCourse.brand_image,
                created_by:singleCourse.created_by
            })
        });
        res.status(200).json({message:'AllCourses Data Fetched ' , result:allCoursesArray})    
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const SingleCourseData = async (req, res) => {
    try {
        const { id } = req.params;
        const singleCourse = await Courses.findById(id);
        res.status(200).json({ message: 'Single course data ', result: singleCourse })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const DeleteCourse = async (req, res) => {
    const { id: _id } = req.params;   // Renaming id to _id
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send('No Post with that id ')
    }
    try {
        await Courses.findByIdAndDelete(_id);
        res.status(204).json({message:'Course Deleted Successfully'}) 
        // status 204 means No Content
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}   


export const editCourse = async(req,res) => {
    const {id:_id} = req.params;
    const { title, description, company_name, price,
        isFree, course_link, format, languages,difficulty,duration,
        banner_image, brand_image , course_category , course_type } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(400).send('Invalid Id Provided');
    }

    try {
        const updateCourse = await Courses.findByIdAndUpdate(_id,{
            $set:{
            'title':title,'description':description,'company_name':company_name,'price':price,
            'isFree':isFree,'course_link':course_link,'format':format,
            'languages':languages,'duration':duration,'difficulty':difficulty,  
            'banner_image':banner_image,'brand_image':brand_image,
            'course_category':course_category,'course_type':course_type
            },
        },{new:true}) 
        res.status(200).json({message:'Course Edited Successfully',result:updateCourse});
    } catch (error) {
        res.status(500).json({message:`Error From editCourse Controller : ${error.message}`});
    }
}



