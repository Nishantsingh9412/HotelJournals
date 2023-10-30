import React from 'react'

import '../assets/css/MidSection.css'

import Jobs from '../assets/img/Job-offers.gif'
import Courses from '../assets/img/Learning.gif'
import Journals from '../assets/img/Newsletter.gif'

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


        <div className='container-fluid mt-5 mb-5 text-center '>
            <div className='text-dark' style={{background:'#E4B49D'}}>
            {/* <div className='text-dark' style={{background:'#ffffff'}}> */}
                <h2 style={{ color: '#000000', paddingTop: 120 }}> Welcome to Hotel Journals </h2>
                <center>
                    <hr style={{ border: '2px solid black', width: '23vw' }} />
                </center>
                <p > Empowering Hotel Careers: Where Education Meets Employment. Explore hotel-focused courses and secure your dream job. We connect aspiring hotel professionals with employers, offering the perfect blend of education and career opportunities in the world of hospitality. </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis enim perspiciatis, dolorem ullam possimus corrupti quibusdam est fugit, ab consequuntur odio cum nihil reprehenderit, obcaecati nemo dolore alias culpa harum libero. Quis quasi tenetur nisi aspernatur repudiandae vitae dolorum dignissimos porro velit explicabo neque hic debitis quae fugit soluta beatae facere, labore ut? Pariatur maxime magni laboriosam unde, alias eum exercitationem eligendi facilis nemo velit animi, nesciunt id. Optio, maiores veniam recusandae id laudantium cumque esse ut tempora nobis, repudiandae praesentium aperiam. Totam ab quaerat corporis, tempore veniam nulla repellendus, eius atque natus necessitatibus, repudiandae ea sequi fugiat quia.</p>

                {/* Cards */}
                <a href="https://storyset.com/education">Education illustrations by Storyset</a>
                <div class="row row-cols-1 row-cols-md-3 g-4 main-content m-0 pt-4 pb-4 ">
                    <div class="col" >
                        <div class="card">
                            <img src={Jobs} className="card-img-top w-100 img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title font-bold">Find Jobs</h5>
                                <p class="card-text">Hotel Journals is your go-to job search website, offering a vast database of job listings across diverse industries. Our intuitive platform simplifies the search process, helping you find the right career opportunity.  </p>
                                <button className='btn btn-dark w-75'> Find jobs Now </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="card">
                            <img src={Courses} className="card-img-top w-100 img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Check Courses</h5>
                                <p class="card-text">Hotel Journals is your online destination for education and skill enhancement. Our website offers a wide range of courses across various disciplines, from business to technology, arts to sciences.</p>
                                <button className='btn btn-dark w-75'> Check Courses </button>

                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src={Journals} className="card-img-top w-100 img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Journals </h5>
                                <p class="card-text"> A personal repository of the author's research, thoughts, and writings. Explore a curated collection of articles and publications directly from the website's author. Thay 're the best journals in the market </p>
                                <button className='btn btn-dark w-75'> Check Courses </button>

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
