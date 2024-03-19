import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import authorImg from '../../assets/img/author_image.jpg';
import CSS from '../About/About.module.css';
import FindJobs from '../landingPage/FindJobs';
import ImageGallery from './ImageGallery';



const About = () => {
  return (
    <div>
      <div className='container'>

        {/* Section 1 Start */}
        <div className='row'>
          <div className='col-md-12'>
            <div className={`${CSS.smallHeading}`}>
              SE EL CAMBIO
            </div>
            <div className={`mt-4 ${CSS.bigHeading}`}>
              Presumir de tu trabajo crea un camino de éxito que inspira a otros a seguir tus pasos
            </div>
          </div>
        </div>
        {/* Section 1 End */}

        {/* Section 2 Start */}
        <div className='row mt-4'>
          <div className='col-md-12'>
            <FindJobs />
          </div>
        </div>
        {/* Section 2 End */}

        {/* Section 3 Start */}
        <div className='row mt-5  mb-5'>
          <div className='col-md-12'>
            <p className={`${CSS.bigHeading}`}> Y tu, ¿Presumes de tu trabajo? </p>
          </div>
        </div>
        {/* Section 3 End */}

      </div>
        {/* Section 4 Start */}
        {/* <div className='row mt-5 mb-2 text-white' style={{ background: '#363434', paddingTop: '5rem', paddingBottom: '4rem' }}>
          <div className='col-md-6'>
            <p className={`${CSS.blackbgHeading} `}>  Lo que busco   </p>
          </div>
          <div className='col-md-6'>
            <div className='row '>
              <ul className='col-md-6' style={{ listStyleType: 'none', paddingLeft: '3rem' }} >
                <li> Un sector más justo </li>
                <li> Mejora de las condiciones  </li>
                <li> Cambios en el sector </li>
                <li> Oportunidades de estudio  </li>
              </ul>

              <ul className='col-md-6' style={{ listStyleType: 'none', paddingLeft: '7rem' }} >
                <li> Un sector más unido </li>
                <li> Igualdad   </li>
                <li> Equilibrio  </li>
                <li> Orgullo  </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* Section 4 End */}

        {/* Section 5 Start */}
        {/* <div className='container-fluid text-justify' style={{ background: '#EBECE6', padding: '9rem' }}>
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
        </div> */}
        {/* Section 5 End */}

        {/* Section 6 Start */}
        <div className={`d-flex flex-wrap justify-content-around text-white p-5 ${CSS.A_s1b}`} >
          <div className=''>
            <p className={`${CSS.blackbgHeading} `}>Lo que busco</p>
          </div>
          <div className={`d-flex flex-wrap justify-content-around text-white ${CSS.A_s2b}`} >
            <ul className='' style={{ listStyleType: 'none' }}>
              <li> Un sector más justo </li>
              <li> Mejora de las condiciones  </li>
              <li> Cambios en el sector </li>
              <li> Oportunidades de estudio  </li>
            </ul>

            <ul className='' style={{ listStyleType: 'none' }}>
              <li> Un sector más unido </li>
              <li> Igualdad   </li>
              <li> Equilibrio  </li>
              <li> Orgullo  </li>
            </ul>
          </div>

        </div>

    <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <ImageGallery />
          </div>
        </div>
        {/* Section 6 End */}

      </div>
    </div>
  );
};

export default About;

