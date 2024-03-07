import React from 'react'
import Profile from '../Recruiters_profile/ImageCropper/Profile.jsx'

const ImageCropperReal = (props) => {
  return (
    <div>
        {/* < Profile oldImage={'https://via.placeholder.com/200/'} /> */}
        <Profile oldImage={props.image} />
    </div>
  )
}

export default ImageCropperReal
