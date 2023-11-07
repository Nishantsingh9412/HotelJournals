import React from 'react';

import Carousel from '../landingPage/Carousel.jsx';
import Midsection from '../landingPage/MidSection.jsx';
import Footer from '../partials/Footer.jsx'
import FindJobs from '../landingPage/FindJobs.jsx';
import Courses from '../landingPage/Courses.jsx';
import Journals from '../landingPage/Journals.jsx';

const Home = () => {
  return (
    <div>
        <Carousel />
        <Midsection />
        <FindJobs /> 
        <Courses />
        <Journals />
        <Footer />
    </div>
  )
}

export default Home
