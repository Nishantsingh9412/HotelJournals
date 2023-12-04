import React from 'react'
import CSS from './Section3.module.css'

import ava1 from '../../assets/img/ava1.jpg'
import ava2 from '../../assets/img/ava2.jpg'
import ava3 from '../../assets/img/ava3.jpg'



// Icons 
import { FaStar } from "react-icons/fa";

const Section3 = () => {
    return (
        <div className='container'>
            {/*  TextSection */}
            <div>
                <div className='mt-5'>
                    <div className='d-flex'>
                        <h1 className={CSS.TheyS}>They Satisfied with Our Service </h1>
                        <div className='d-flex flex-column'>
                            <h3 className={`ml-5  ${CSS.TestimonialsText} `} style={{ color: '#FE7443', fontWeight: '600' }} > Testimonials </h3>
                            <p className='ml-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ut.  </p>
                        </div>
                    </div>


                </div>
            </div>

            {/* IconsSection */}

            <div className='container d-flex'>
                <div className={CSS.Box}>
                    <div className={`${CSS.AllContent}`}>

                        <div className='d-flex'>
                            <img className={`img-fluid rounded-circle ${CSS.testImg}`} src={ava1} alt='testimonials Image' />
                            <div className='d-flex flex-column'>
                                <h5 className={CSS.iconHeading}> Olive Awasthi </h5>
                                <p className='ml-3'> Cafe Owner </p>
                            </div>

                        </div>

                            <div className='pl-1 d-flex mt-4'>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                
                            </div>

                            <div>
                                <p className={CSS.testDesc}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto distinctio fugit, perferendis deleniti dolorem laboriosam. </p>
                            </div>
                        {/* <RiCheckboxMultipleLine />  Multi CLeaning   */}
                        {/* <MdOutlineRoofing />  --- CS  */}

                    </div>
                </div>


                <div className={CSS.Box}>
                    <div className={`${CSS.AllContent}`}>

                        <div className='d-flex'>
                            <img className={`img-fluid rounded-circle ${CSS.testImg}`} src={ava2} alt='testimonials Image' />
                            <div className='d-flex flex-column'>
                                <h5 className={CSS.iconHeading}> Olive Awasthi </h5>
                                <p className='ml-3'> Cafe Owner </p>
                            </div>

                        </div>

                            <div className='pl-1 d-flex mt-4'>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                
                            </div>

                            <div>
                                <p className={CSS.testDesc}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto distinctio fugit, perferendis deleniti dolorem laboriosam. </p>
                            </div>
                        {/* <RiCheckboxMultipleLine />  Multi CLeaning   */}
                        {/* <MdOutlineRoofing />  --- CS  */}

                    </div>
                </div>




                <div className={CSS.Box}>
                    <div className={`${CSS.AllContent}`}>

                        <div className='d-flex'>
                            <img className={`img-fluid rounded-circle ${CSS.testImg}`} src={ava3} alt='testimonials Image' />
                            <div className='d-flex flex-column'>
                                <h5 className={CSS.iconHeading}> Olive Awasthi </h5>
                                <p className='ml-3'> Cafe Owner </p>
                            </div>

                        </div>

                            <div className='pl-1 d-flex mt-4'>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                <FaStar color='#FE7443' size={'1.5vw'} className='ml-3'/>
                                
                            </div>

                            <div>
                                <p className={CSS.testDesc}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto distinctio fugit, perferendis deleniti dolorem laboriosam. </p>
                            </div>
                        {/* <RiCheckboxMultipleLine />  Multi CLeaning   */}
                        {/* <MdOutlineRoofing />  --- CS  */}

                    </div>
                </div>


               
                

            </div>
        </div>

    )
}

export default Section3
