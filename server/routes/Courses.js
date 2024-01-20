import express from "express"

import { AllCourseData, CoursesAdmin, DeleteCourse, SingleCourseData, editCourse } from "../controllers/courses.js"

const router = express.Router();

// Add a new Course
router.post('/newCourse',CoursesAdmin)
router.get('/allCourses',AllCourseData) 
router.get('/singleCourse/:id',SingleCourseData)
router.delete('/singleCourse/:id',DeleteCourse)
router.patch('/singleCourse/:id',editCourse)

export default router;