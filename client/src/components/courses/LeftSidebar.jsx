import React from 'react'


const LeftSidebar = () => {
  return (
    <div>
      <div> 
        {/* Couse Type  */}
        <div>
            <label htmlFor="courseTypes"> Course Types </label>
            <input type="radio" className='form-check-input position-static' />
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
