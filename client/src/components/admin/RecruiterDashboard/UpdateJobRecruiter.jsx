import React from 'react'
import RecruiterSidebarFinal from '../../Miscellaneous/RecruiterSidebarFinal'
import UpdateJobForm from './UpdateJobForm'

const UpdateJobRecruiter = () => {
  return (
    <div className='d-flex'>   
        <div style={{width:'10%'}}>
            <RecruiterSidebarFinal />
        </div>
        <div style={{width:'90%'}}>   
            <UpdateJobForm />
        </div>       
    </div>
  )
}

export default UpdateJobRecruiter
