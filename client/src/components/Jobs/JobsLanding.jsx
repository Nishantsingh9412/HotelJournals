import React from 'react'
import { NavLink } from 'react-router-dom'

const JobsLanding = () => {
  return (
    <div>
        <h1>Jobs Landing Page</h1>
        <NavLink to='/jobs/dashboard'> 
            <button className='btn btn-primary ml-3'> Find Jobs </button>
        </NavLink>
        <NavLink to='/jobs/post'> 
            <button className='btn btn-warning ml-3'> Post  Jobs </button>
        </NavLink>
        <NavLink to='/alljobs'> 
            <button className='btn btn-info ml-3'> All Jobs </button>
        </NavLink>        
    </div>
  )
}

export default JobsLanding
