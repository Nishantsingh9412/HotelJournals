import React, { useEffect } from 'react'
import EducatorSidebar from './EducatorSidebar';
import ManageCouseTable from './ManageCouseTable';


const ManageCourses = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='d-flex'>
            <div style={{ width: '10%' }}>
                <EducatorSidebar />
            </div>


            <div style={{ width: '90%' }}>
              <ManageCouseTable />
            </div>
        </div>

    )
}

export default ManageCourses
