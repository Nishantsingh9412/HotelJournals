import React from 'react'
import { NavLink } from 'react-router-dom'
import 'animate.css';

import '../../assets/css/MidSection.css'
import Jobs from '../../assets/img/Job-offers.gif'
import Courses from '../../assets/img/Learning.gif'
import Journals from '../../assets/img/Newsletter.gif'
import AboutMe from '../../assets/img/about_me.gif'
import BlogPost from '../../assets/img/Blog_post.gif'


const MidSection = () => {
    return (
        // <div className='pt-4'>   
        //     <div class="card text-center">
        //         <div class="card-header">
        //                 <h1>
        //                     Welcome to Hotel Journals 
        //                 </h1>
        //         </div>
        //         <div class="card-body">
        //             <h5 class="card-title">Special title treatment</h5>
        //             <p class="card-text">Empowering Hotel Careers: Where Education Meets Employment. Explore hotel-focused courses and secure your dream job. We connect aspiring hotel professionals with employers, offering the perfect blend of education and career opportunities in the world of hospitality.</p>
        //             {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        //         </div>
        //         <div class="card-footer text-muted">
        //             2 days ago
        //         </div>
        //     </div>
        // </div>


        <div className='container-fluid mt-5 mb-5 text-center ' >
            <div className='text-dark ' >
                {/* <div className='text-dark' style={{background:'#ffffff'}}> */}
                <h2 className='text-dark' >  Welcome to  <span className='h2 p-0 m-0' style={{ color: '#C97172' }}> Hotel Journals</span>  </h2>
                <center>
                    <hr className='animate__animated animate__flash animate__infinite' style={{ border: '2px solid black', width: '23vw' }} />
                </center>
                <p className='pl-5 pr-5' style={{ fontFamily: 'cursive', fontSize: 'large' }}>  Empowering Hotel Careers: Where Education Meets Employment. Explore hotel-focused courses and secure your dream job. We connect aspiring hotel professionals with employers, offering the perfect blend of education and career opportunities in the world of hospitality. </p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis enim perspiciatis, dolorem ullam possimus corrupti quibusdam est fugit, ab consequuntur odio cum nihil reprehenderit, obcaecati nemo dolore alias culpa harum libero. Quis quasi tenetur nisi aspernatur repudiandae vitae dolorum dignissimos porro velit explicabo neque hic debitis quae fugit soluta beatae facere, labore ut? Pariatur maxime magni laboriosam unde, alias eum exercitationem eligendi facilis nemo velit animi, nesciunt id. Optio, maiores veniam recusandae id laudantium cumque esse ut tempora nobis, repudiandae praesentium aperiam. Totam ab quaerat corporis, tempore veniam nulla repellendus, eius atque natus necessitatibus, repudiandae ea sequi fugiat quia.</p> */}

                {/* Cards */}
                <a href="https://storyset.com/education">Education illustrations by Storyset</a>
                <div class="row row-cols-1 row-cols-md-3 g-4 m-0 pt-4 pb-4 ">
                    <div class="col mt-3 animate__animated animate__fadeInLeft" >
                        <div class="card border border-secondary rounded">
                            <img src={Jobs} className="card-img-top w-100 img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title font-bold">Find Jobs </h5>
                                <p class="card-text">Hotel Journals is your go-to job search website, offering a vast database of job listings across diverse industries. Our intuitive platform simplifies the search process, helping you find the right career opportunity.  </p>
                                <button className='btn btn-dark w-75'> Find Jobs  </button>
                            </div>
                        </div>
                    </div>

                    <div class="col mt-3">
                        <div class="card border-secondary rounded">
                            <img src={Courses} className="card-img-top w-100 img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Check Courses</h5>
                                <p class="card-text">Hotel Journals is your online destination for education and skill enhancement. Our website offers a wide range of courses across various disciplines, from business to technology, arts to sciences.</p>
                                <button className='btn btn-dark w-75'> Check Courses </button>

                            </div>
                        </div>
                    </div>

                    <div class="col mt-3">
                        <div class="card border-secondary rounded">
                            <img src={Journals} className="card-img-top w-100 img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Journals </h5>
                                <p class="card-text"> A personal repository of the author's research, thoughts, and writings. Explore a curated collection of articles and publications directly from the website's author. Thay 're the best journals in the market </p>
                                <button className='btn btn-dark w-75'> Check Journals </button>
                            </div>
                        </div>
                    </div>


                    {/* ..... */}
                </div>


                {/* <div className="row row-cols-1 row-cols-md-2  m-2">
                    <div className='col'>
                        <div class="card border-secondary rounded w-50">
                            <img src={AboutMe} className="card-img-top w-100 img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> About Me </h5>
                                <p class="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius magni totam ipsam maiores doloribus quidem, repellat nesciunt delectus quam dolorum mollitia quis detectus petectus titectus lorem ipsum  </p>
                                <button className='btn btn-dark w-75'> <NavLink to='/about' className='nav-link-header'>  About Me  </NavLink> </button>
                            </div>
                        </div>
                    </div>

                    <div className='col w-50'>
                        <div class="card  border-secondary rounded ">
                            <img src={Journals} className="card-img-top w-100 img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Tips </h5>
                                <p class="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil fuga quam voluptates eius animi et, nemo possimus a ducimus aut fugit recusandae, commodi consequuntur dolores unde officiis, deleniti vel earum!</p>
                                <button className='btn btn-dark w-75'> See Tips </button>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='container'>
                    <div class="row row-cols-1 row-cols-md-2">
                        <div class="col mt-3 animate__animated animate__fadeInLeft" >
                            <div class="card border border-secondary rounded">
                                <img src={AboutMe} className="card-img-top w-100 img-responsive" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title font-bold">Find Jobs </h5>
                                    <p class="card-text">Hotel Journals is your go-to job search website, offering a vast database of job listings across diverse industries. Our intuitive platform simplifies the search process, helping you find the right career opportunity.  </p>
                                    <button className='btn btn-dark w-75'> Find Jobs  </button>
                                </div>
                            </div>
                        </div>

                        <div class="col ">
                            <div class="card mt-3 border-secondary rounded">
                                <img src={BlogPost} className="card-img-top w-100 img-responsive" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"> Journals </h5>
                                    <p class="card-text"> A personal repository of the author's research, thoughts, and writings. Explore a curated collection of articles and publications directly from the website's author. Thay 're the best journals in the market </p>
                                    <button className='btn btn-dark w-75'> Check Journals </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* ..... */}
                </div>

            </div>




        </div>
    )
}

export default MidSection
