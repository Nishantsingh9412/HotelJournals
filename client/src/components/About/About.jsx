import React from 'react'

import authorImg from '../../assets/img/author_image.jpg'
const About = () => {
  return (
    <div className='container'>
        <div className='img-responsive'>
            <img src={authorImg} alt="author_image" className='w-100' style={{height:'35vw'}}/>
        </div>
        <div className='row'>
            <div className='col mt-5 text-center'>
                <h2> About the Author </h2>
                <p>My name is Naira, I am 27 years old, I am from Spain and I have been in the world of tourism since I was 19. In addition to working, I studied Tourism and completed an MBA in Hospitality & Tourism Management.  </p> 
                <p>During this time I could see that tourism professionals were the only ones who did not have a community or products that made us differentiate ourselves and love our work. </p>
                <p className='mt-4'> The content created on networks in relation to tourism has always been focused from the point of view of tourists but never from the point of view of tourism scientists. That's why I wanted to take a step forward by creating something specific and special for us. </p>  
                <p className='mt-4'>From this idea Hotel Journals was born. A brand made by and for tourism professionals. In a short time we are a community that supports each other, shares tips and laughs together. Something that all people need, a community where they can feel identified.</p>
            </div>

        </div>
    </div>
  )
}

export default About
    