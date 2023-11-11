import React from 'react'

// import jobImg from '../../assets/img/jobImg2.jpg'
import HiringImg from '../../assets/img/Hiring.gif'

import 'animate.css';


const FindJobs = () => {
    return (
        <div>
            {/* <h2> this is find jobs page </h2> */}
            {/* <div className='container'>
            <img src={jobImg} alt="" height={350} width={280} />

        </div> */}


            <div class="row row-cols-2 row-cols-md-2 m-0 pt-4 pb-4 " style={{background:'radial-gradient(#e67138, #e5e5e5)'}}> 
                <div class="col" >
                    <div class="card w-75 ml-5">
                        <img src={HiringImg} className=" img-responsive" alt="job_man"  style={{borderRadius:'50px'}} />
                        {/* <div class="card-body mr-5">
                            <h5 class="card-title font-bold">Find Jobs </h5>
                            <p class="card-text ">Hotel Journals is your go-to job search website, offering a vast database of job listings across diverse industries. Our intuitive platform simplifies the search process, helping you find the right career opportunity.  </p>
                        </div> */}
                    </div>
                </div>
                <div className='col pt-5 pr-4 pl-0'>
                        <div class="text-center mt-5 pt-5">
                            <h1 class="card-title text-dark  font-bold" > Find Jobs </h1>
                            <center>
                                <hr className='animate__animated animate__headShake animate__infinite' style={{ border: '2px solid white', width: '10vw' }} />
                            </center>

                            <p class="card-text h4 text-dark pt-4">
                                "Hotel Journals' 'Find Jobs' service connects job seekers with tailored opportunities, offering a vast database of positions across various industries, streamlining the search for ideal career matches."</p>
                            <button className='btn btn-dark  mt-5 p-3  border-rounded' > Explore Jobs</button>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default FindJobs
