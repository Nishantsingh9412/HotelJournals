import React from 'react'

import EducatorSidebar from './EducatorSidebar'
import UpdateCourseForm from './UpdateCourseForm'
const UpdateCourseEdu = () => {
    return (
        <div className='d-flex'>
            <div style={{ width: '10%' }}>
                <EducatorSidebar />
            </div>

            <div style={{width:'90%'}}>
                    <UpdateCourseForm />
            </div>

        </div>
    )
}

export default UpdateCourseEdu
