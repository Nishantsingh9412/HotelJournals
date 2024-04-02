import React from 'react'
import EducatorSidebar from './EducatorSidebar'
import PostCourseForm from './PostCourseForm'

const PostCourse = () => {
  return (
    <div className='d-flex'>
            <div style={{width:'10%'}}>
                <EducatorSidebar />
            </div>

            <div style={{width:'90%'}}>
                <PostCourseForm />
            </div>  
    </div>
  )
}

export default PostCourse
