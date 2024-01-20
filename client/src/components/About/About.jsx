import React from 'react'

import authorImg from '../../assets/img/author_image.jpg'
import CSS from '../About/About.module.css'
import FindJobs from '../landingPage/FindJobs'
// import ImgGallery from './ImgGallery'
import ImageGallery from './ImageGallery'

const About = () => {
  return (
      // Main Div 
      <div>
          <div className='container'>        

            {/*  Section 1 Start */}
            <div>
              <div className='col'>
              <div className='row'>
                    <div className={CSS.smallHeading}>
                            YOUR HEADING 
                    </div>
                </div>
                <div className={`row mt-4  ${CSS.bigHeading} `}>
                  CADA DÍA PERCIBIMOS MÁS DE 6000 MARCAS, EL OBJETIVO ES QUE ELIJAN LA TUYA.
                </div>
              </div>
              
            </div>

            {/*  Section 1 End  */}


              
          </div>
                {/* Section 2 Start */}
                          {/*  Author Image Section */}
              <div>
                <FindJobs />
              </div>
                          {/*  Author Image Section End */}   
                {/* Section 2 end  */}

                {/* Section 3 Start */} 

                <div className='container mt-5 pt-5 pb-5 mb-5'>
                  <p className={`${CSS.bigHeading}`}> Y tu,¿Presumes de tu trabajo?  </p>

                  {/* <p className='text-justify text-end' style={{marginLeft:'7rem'}}>  
                    Recibirás atención personalizada desde el minuto uno.  
                  <p className='mt-2'>
                    Además, mis clientes siempre destacan mi cercanía aparte de mi profesionalidad. El trato cercano y la comunicación con ellos es algo imprescindible para mí. 
                  </p>
                    Te mantendré al tanto de todo el proceso, no me gusta que el cliente no sepa de su proyecto hasta que esté finalizado. Además, podremos realizar asesorías cuando sea necesario. 
                    Y por último, no importa donde estés porque ofrezco mis servicios tanto presencial como online.
                  </p> */}
                </div>
                {/* Section 3 End */}


                {/* Section 4 Start */}
                {/* <div className='container-fluid mt-5 mb-2 text-white' style={{background:'#363434',paddingTop:'5rem',paddingBottom:'4rem'}}>
                  <div className='row'>
                      <div className='col '>
                        <p className={`${CSS.blackbgHeading} `}>  Lo que me mueve   </p>
                      </div>
                      

                      <div className='col'>
                        <div className='row '>
                        <ul style={{ listStyleType: 'none', paddingLeft:'3rem' }} >
                          <li> Lorem Ipsum </li>
                          <li> Dolor Sit  </li>
                          <li> Amet It </li>
                          <li> Should be </li>
                        </ul>

                        <ul style={{ listStyleType: 'none', paddingLeft:'7rem' }} >
                          <li> Lorem Ipsum </li>
                          <li> Dolor Sit  </li>
                          <li> Amet It </li>
                          <li> Should be </li>
                        </ul>
                        </div>

                      </div>
                  </div>

                </div> */}
                {/* Section 4 End */}


                {/* Section 5 Start */}
                    {/* <div className='container-fluid text-justify' style={{background:'#EBECE6',padding:'9rem'}}> 
                        <div className='row'>
                            <div className='col'>
                                <p className='mb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <small>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quo architecto sapiente alias accusantium repudiandae deserunt
                                    recusandae, laborum eaque itaque. Voluptatum, magnam illo qui quam
                                    consectetur doloremque minus ea ipsam distinctio, ut officia quidem, adipisci officiis quae vel! Animi similique et officiis eligendi quisquam voluptatibus nam esse obcaecati eaque facilis. Exercitationem!
                                </small>

                            </div>

                            <div className='col'>
                                <p className='mb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <small>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, 
                                aperiam animi ratione quaerat tempore error architecto minima exercitationem mollitia. 
                                Soluta necessitatibus voluptatibus sit aut nisi, illum cumque culpa libero dignissimos corrupti nostrum illo
                                sapiente saepe est delectus repellendus nobis, velit vero asperiores laboriosam odit modi inventore aspernatur eum? Beatae, molestias?
                                </small>
                            </div>
                        </div>
                    </div>      
 */}
                {/* Section 5 End */}

              {/* Section 6 Start  */}
                <ImageGallery />
              {/* Section 6 End */}

      </div>
  ) 
}

export default About



 // <div className='container'>
    //     <div className='img-responsive'>
    //         <img src={authorImg} alt="author_image" className='w-100' style={{height:'35vw'}}/>
    //     </div>
    //     <div className='row'>
    //         <div className='col mt-5 text-center'>
    //             <h2> About the Author </h2>
    //             <p>My name is Naira, I am 27 years old, I am from Spain and I have been in the world of tourism since I was 19. In addition to working, I studied Tourism and completed an MBA in Hospitality & Tourism Management.  </p> 
    //             <p>During this time I could see that tourism professionals were the only ones who did not have a community or products that made us differentiate ourselves and love our work. </p>
    //             <p className='mt-4'> The content created on networks in relation to tourism has always been focused from the point of view of tourists but never from the point of view of tourism scientists. That's why I wanted to take a step forward by creating something specific and special for us. </p>  
    //             <p className='mt-4'>From this idea Hotel Journals was born. A brand made by and for tourism professionals. In a short time we are a community that supports each other, shares tips and laughs together. Something that all people need, a community where they can feel identified.</p>
    //         </div>

    //     </div>
    // </div>
    