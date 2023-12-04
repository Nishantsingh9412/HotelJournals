import React from 'react';

import Carousel from '../landingPage/Carousel.jsx';
import Midsection from '../landingPage/MidSection.jsx';
import Footer from '../partials/Footer.jsx'
import FindJobs from '../landingPage/FindJobs.jsx';
import Courses from '../landingPage/Courses.jsx';
import Journals from '../landingPage/Journals.jsx';
import Testimonials from '../landingPage/Testimonials.jsx';
import Section4 from '../landingPage/Section4/Section4.jsx';
// import Section3 from '../landingPage/Section3.jsx';

const Home = () => {
  return (
    <div>
        <Carousel />
        <Midsection />
        {/* <Section3 /> */}
        <Testimonials />
        <Section4 />
        {/* <FindJobs />  */}
        {/* <Courses /> */}
        {/* <Journals /> */}
        <Footer />
    </div>
  )
}

export default Home
