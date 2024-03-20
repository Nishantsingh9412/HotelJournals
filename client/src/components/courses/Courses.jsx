import React, { useEffect } from 'react'
import MidImage from './MidImage'
const Courses = () => {
  
  useEffect(() => {
      window.scrollTo(0,0);
  },[])
  
  return (
    <div>
        {/* <SearchBar />  */}
        <MidImage />
        {/* <LeftSidebar /> */}
    </div>
  )
}

export default Courses