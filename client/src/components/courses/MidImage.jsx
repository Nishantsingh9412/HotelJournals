import React from 'react'
import { FaTimes } from 'react-icons/fa';

import course_heading from '../../assets/img/course_heading.jpg'
import CheckBox from './CheckBox';
import Cards from './Cards';

import CSS from './MidImage.module.css'

const mountImgStyle = {
    width: '62.5rem',
    height: '12rem',
    // marginLeft: '25vw',
    // marginTop: '1vw'
}

const MidImage = () => {
    return (
        // <div className='container'> 
        //     <div className='col'>

        //         <div className='row'>
        //             <div className='ml-2' >
        //             </div>
        //             <img src={mountain} style={mountImgStyle} alt="mountain" className="img-fluid" />
        //         </div>

        //     </div>

        // </div>
        <div > 
            <div className={` ${CSS.mainClassContainer} d-flex`}>

                {/* sidebar */}
                <div className={`${CSS.sidebar}`} >
                    {/* sidebar content */}
                    <div className='ml-2 pb-3'>
                        <div className='d-flex justify-content-between'>
                            <h6 className='mt-2'> FILTER BY </h6>
                            <h6 className='mt-2 mr-4'>  <FaTimes size={15} color="black" />  clear  </h6>
                        </div>
                        <hr style={{ background: '#E4B49D' }} />

                        {/* section1 */}
                        <h6 className='font-weight-bold'> Course Types </h6>
                        <div className='ml-3'>
                            <CheckBox content={'Bachelors'} />
                            <CheckBox content={'Masters'} />
                            <CheckBox content={'Professionals'} />
                            <CheckBox content={'Shorts'} />
                        </div>

                        {/* section2 */}

                        <h6 className='font-weight-bold mt-3'> Course Languages </h6>
                        <div className='ml-3'>
                            <CheckBox content={'English'} />
                            <CheckBox content={'Spanish'} />
                            <CheckBox content={'French'} />
                            <CheckBox content={'Italian'} />
                            <CheckBox content={'Portugese'} />
                            <CheckBox content={'German'} />
                        </div>

                        {/* section3 */}

                        <h6 className='font-weight-bold mt-3'> Categories </h6>
                        <div className='ml-3'>
                            <CheckBox content={'Web Development'} />
                            <CheckBox content={'Data Science'} />
                            <CheckBox content={'Machine Learning'} />
                            <CheckBox content={'Mobile App Development'} />
                            <CheckBox content={'Cybersecurity'} />
                            <CheckBox content={'Digital Marketing'} />
                            <CheckBox content={'Sales and Marketing'} />
                            <CheckBox content={'Spa'} />
                            <CheckBox content={'Tourism'} />
                            <CheckBox content={'Business Skills'} />
                        </div>

                    </div>

                </div>
                {/* image */}
                <div className='container-fluid' >
                    <div className={`${CSS.imageClass}`} >
                        <img src={course_heading} style={mountImgStyle} alt="mountain" className="" />
                    </div>
                    
                    <Cards />
                </div>

            </div>

        </div>

    )
}

export default MidImage
