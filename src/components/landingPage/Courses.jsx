import React from 'react'

import expcourses from '../../assets/img/Explore_courses.jpg'

import 'animate.css';
const Courses = () => {
    return (

        <div>
            {/* <h2> this is find jobs page </h2> */}
            {/* <div className='container'>
    <img src={jobImg} alt="" height={350} width={280} />

</div> */}
                {/* <br /><br /><br /><br /> */}

        <div className='container-fluid p-0 m-0'>
            <div class="row row-cols-2 row-cols-md-2 m-0  pb-4 " style={{ background: 'linear-gradient(98deg, #e4b49d, transparent)',height:'44vw' }}>
                
                {/* -----------    */}
                <div className='col pl-4 pr-2 '>
                    <div class="text-center  pt-3">
                        <h1 class="card-title text-dark  font-bold" style={{paddingTop:'10vw'}}> Explore Courses </h1>
                        <center>
                            <hr className='animate__animated animate__headShake animate__infinite' style={{ border: '2px solid white', width: '10vw' }} />
                        </center>

                        <p class="card-text h4 text-dark pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, ad tempore fugit blanditiis earum iure aliquid dolorum temporibus doloremque incidunt, error ipsa nesciunt laborum quidem impedit sapiente architecto nihil illo?</p>
                        <button className='btn btn-dark  mt-5 p-3  border-rounded' > Explore Jobs</button>
                    </div>
                </div>


                {/* --------- */}


                <div class="col"  style={{paddingTop:'10vw'}}>
                    <div class="card w-75 ml-5">
                        <img src={expcourses} className="w-100  img-rounded img-thumbnail img-responsive" alt="job_man" />
                        {/* <div class="card-body mr-5">
                    <h5 class="card-title font-bold">Find Jobs </h5>
                    <p class="card-text ">Hotel Journals is your go-to job search website, offering a vast database of job listings across diverse industries. Our intuitive platform simplifies the search process, helping you find the right career opportunity.  </p>
                     </div> */}
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    
    )
}

export default Courses
