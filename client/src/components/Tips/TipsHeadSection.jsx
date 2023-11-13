import React, { lazy } from 'react'

import blogheaderImg from  '../../assets/img/blogs_head_img.jpg'

const TipsHeadSection = () => {
  return (
    <div className='container mt-2'>
        <div className='row' > 
            <div className='col' style={{marginTop: '9vw'}}>
                    <h1 style={{fontWeight:'700'}}> Welcome to my Tips  &nbsp; Section !   </h1>
                    <p className='mt-4' style={{fontSize:'larger',fontWeight:400}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae minima iure perspiciatis ad iusto saepe harum nihil. Nihil, sequi mollitia fugiat maxime eum repellat provident modi libero recusandae repellendus qui aliquid exercitationem quisquam est officiis debitis illo earum ducimus aliquam ut. Labore commodi tenetur facere quibusdam repellat asperiores velit?</p>
                    <button className='btn btn-dark mt-3'> Check Tips  </button>
            </div>     
            <div className='col'>
                <img className='w-75 pt-4 ml-5 pl-5 ' src={blogheaderImg} alt=""  style={{borderRadius:'10%'}}/>
            </div>
        </div>
    </div>
  )
}

export default TipsHeadSection
