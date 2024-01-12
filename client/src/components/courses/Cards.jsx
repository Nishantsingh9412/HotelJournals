import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { FiThumbsUp } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

import Course1 from '../../assets/img/course1.jpg'
import Course2 from '../../assets/img/course2.jpg'
import Course3 from '../../assets/img/course3.jpg'
import Course4 from '../../assets/img/course4.jpg'
import Course5 from '../../assets/img/course5.jpg'
import Course6 from '../../assets/img/course6.jpg'
import Course7 from '../../assets/img/course7.jpg'
import Course8 from '../../assets/img/course8.jpg'
import Course9 from '../../assets/img/course9.jpg'
import CSS from './Cards.module.css'



const cardImageStyle = {
    width: '314px',
    height: '243px',
}


const Cards = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" style={cardImageStyle} src={Course1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">Lorem ipsum dolor </h5>
                            <p className="card-text">Some quick example text to build the another way to show</p>
                            <p className="card-text">Some quick example text to build   </p>
                            <div className='d-flex mt-3'>
                                <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                                <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                            </div>
                            <button className={`btn mt-5 mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" style={cardImageStyle} src={Course2} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold ">Lorem ipsum dolor</h5>
                            <p className="card-text">Some quick example text to build the another way to show</p>
                            <p className="card-text">Some quick example text to build   </p>
                            <div className='d-flex mt-3'>
                                <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                                <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                            </div>
                            <button className={`btn mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" style={cardImageStyle} src={Course3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold"> Lorem ipsum dolor </h5>
                            <p className="card-text">Some quick example text to build the another way to show</p>
                            <p className="card-text">Some quick example text to build   </p>
                            <div className='d-flex mt-3'>
                                <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                                <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                            </div>
                            <button href="#" className={`btn mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="row mt-4">
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" style={cardImageStyle} src={Course4} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">Lorem ipsum dolor </h5>
                            <p className="card-text">Some quick example text to build the another way to show</p>
                            <p className="card-text">Some quick example text to build   </p>
                            <div className='d-flex mt-3'>
                                <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                                <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                            </div>
                            <button href="#" className={`btn mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" style={cardImageStyle} src={Course5} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold ">Lorem ipsum dolor</h5>
                            <p className="card-text">Some quick example text to build the another way to show</p>
                            <p className="card-text">Some quick example text to build   </p>
                            <div className='d-flex mt-3'>
                                <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                                <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                            </div>
                            <button href="#" className={`btn mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" style={cardImageStyle} src={Course6} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold"> Lorem ipsum dolor </h5>
                            <p className="card-text">Some quick example text to build the another way to show</p>
                            <p className="card-text">Some quick example text to build   </p>
                            <div className='d-flex mt-3'>
                                <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                                <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                            </div>
                            <button href="#" className={`btn mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                        </div>
                    </div>
                </div>
            </div>





            <div className="row mt-4">
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" style={cardImageStyle} src={Course7} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">Lorem ipsum dolor </h5>
                            <p className="card-text">Some quick example text to build the another way to show</p>
                            <p className="card-text">Some quick example text to build   </p>
                            <div className='d-flex mt-3'>
                                <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                                <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                            </div>
                            <button href="#" className={`btn mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" style={cardImageStyle} src={Course8} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold ">Lorem ipsum dolor</h5>
                            <p className="card-text">Some quick example text to build the another way to show</p>
                            <p className="card-text">Some quick example text to build   </p>
                            <div className='d-flex mt-3'>
                                <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                                <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                            </div>
                            <button href="#" className={`btn mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" style={cardImageStyle} src={Course9} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold"> Lorem ipsum dolor </h5>
                            <p className="card-text">Some quick example text to build the another way to show</p>
                            <p className="card-text">Some quick example text to build   </p>
                            <div className='d-flex mt-3'>
                                <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                                <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                            </div>
                            <button href="#" className={`btn mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        // Section 2nd 



    )
}

export default Cards
