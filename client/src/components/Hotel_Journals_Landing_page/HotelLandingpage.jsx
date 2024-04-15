import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { easeIn, easeInOut, motion } from "framer-motion";
import { Link } from 'react-router-dom'

import courseImage from '../../assets/img/courses_large.png'
import testimonialImg1 from '../../assets/img/testimonials/ana_mantero_testimonial_1.jpeg'
import testimonialImg2 from '../../assets/img/testimonials/gaten_meo_testimonial2.jpeg'
import testimonialImg3 from '../../assets/img/testimonials/stephania_testimonial3.jpeg'
import testimonialImg4 from '../../assets/img/testimonials/rita_medina.jpeg'
import pinkimg from "../../assets/img/aboutme_lannding_page.png";

import jobGraphImg from '../../assets/img/career_gif_landing_page.gif'


import bestbokkimg from "../../assets/img/book7.jpg";
import bookimg2 from '../../assets/img/book8.jpg'
import bookimg3 from '../../assets/img/book_large.png'
import bookimg4 from '../../assets/img/book6.jpg'
import bookimg5 from '../../assets/img/front_office3.jpg'

import careerImg from '../../assets/img/jobs_landing_page_main.png'



import circleimg from "../../assets/hotaljournalimg/circleimg.png";
import userimg1 from "../../assets/hotaljournalimg/testmonial/img1.avif";
import userimg2 from "../../assets/hotaljournalimg/testmonial/img2.jpg";
import courseimg1 from "../../assets/hotaljournalimg/course_img/img1.avif";
import courseimg2 from "../../assets/hotaljournalimg/course_img/img2.avif";
import courseimg3 from "../../assets/hotaljournalimg/course_img/img3.avif";
import courseimg4 from "../../assets/hotaljournalimg/course_img/img4.avif";
import courseimg5 from "../../assets/hotaljournalimg/course_img/img5.avif";
import courseimg6 from "../../assets/hotaljournalimg/course_img/img6.avif";
// import bookimg2 from "../../assets/hotaljournalimg/book_img/img2.jpg";
// import bookimg3 from "../../assets/hotaljournalimg/book_img/img3.jpeg";
// import bookimg4 from "../../assets/hotaljournalimg/book_img/img4.jpg";
// import bookimg5 from "../../assets/hotaljournalimg/book_img/img5.jpg";
import { FaHeart, FaLinkedin } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaGoogleWallet } from "react-icons/fa";
// import styles  from "./HotelLandingPage.module.css";
//  import courseimg1 from "../../assets/hotaljournalimg/course_img/img1.avif"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './HotelLandingPage.module.css'

const HotelLandingpage = () => {

  const baseURl = 'http://localhost:3000'

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  const card_items = [
    {
      icon: <FaHeart />,
      // pairagraph: " Be proud of your job and love what you do"
      pairagraph: "Presume de tu trabajo"
    },
    {
      icon: <FaStar />,
      // pairagraph: "Stand out for your knowledge and your passion",
      pairagraph: "Destaca por tus conocimientos y tu pasión"
    },
    {
      icon: <FaGoogleWallet />,
      // pairagraph: "Plan the path you want to follow to achieve your goals",
      pairagraph: "Planifica el camino que quieres seguir para conseguir tus objetivos."
    },
  ];

  const course_data = [
    {
      img: courseimg1,
      tittle: "Figma UI Design",
      name: "Ari Setewan",
    },
    {
      img: courseimg2,
      tittle: "Marketing Design",
      name: "Wilden Wart",
    },
    {
      img: courseimg3,
      tittle: "Mobile Dev",
      name: "Vckey Ardi",
    },
    {
      img: courseimg4,
      tittle: "UX Fundamental",
      name: "Ari Setewan",
    },
    {
      img: courseimg5,
      tittle: "Copywrting",
      name: "Gunawan Jaya",
    },
    {
      img: courseimg6,
      tittle: "Web Developer",
      name: "Sanual Arifin",
    },
  ];

  const Job_left_data = [
    {
      Job_role: "Head of solutos Engneering",
      Job_catagory: "US Remote",
      Salary: "$540",
      Timing: "Full Time",
    },
    {
      Job_role: "Senior UI/UX Desiger",
      Job_catagory: "Remote",
      Salary: "$689",
      Timing: "Contractor",
    },
    {
      Job_role: "Google Ads Expert",
      Job_catagory: "Remote",
      Salary: "$489",
      Timing: "Full Time",
    },
    {
      Job_role: "Account Executive",
      Job_catagory: "UK Remote",
      Salary: "%480",
      Timing: "Full time",
    },
  ];
  const Job_right_data = [
    {
      Job_role: "Head of solutos Engneering",
      Job_catagory: "US Remote",
      Salary: "$540",
      Timing: "Full Time",
    },
    {
      Job_role: "Senior UI/UX Desiger",
      Job_catagory: "Remote",
      Salary: "$689",
      Timing: "Contractor",
    },
    {
      Job_role: "Google Ads Expert",
      Job_catagory: "Remote",
      Salary: "$489",
      Timing: "Full Time",
    },
    {
      Job_role: "Account Executive",
      Job_catagory: "UK Remote",
      Salary: "%480",
      Timing: "Full time",
    },
  ];

  const testimonial_data = [
    {
      img: testimonialImg1,
      name: "STEPHANIA AYALA",
      role: "FRONT OFFICE MANAGER",
      // pairagraph:
      //   `Hotel Journals met one of the largest and never recognized needs of the hotel sector... 
      // To have an identity, a tool that represents us and that's something that gives us a sense 
      // of belonging`,
      pairagraph:
        `
        Hotel Journals cubrió una de las necesidades más grandes y 
        nunca reconocidas del sector hotelero...
        La de tener una identidad, una herramienta que nos represente y 
        ese algo que nos dé un sentido de pertenencia.
        `,
      profile_link: 'https://www.linkedin.com/in/stephania-ayala-ornelas-424b19218/'
    },
    {
      img: testimonialImg2,
      name: "Gaëtan Meo",
      role: "Front Desk Agent",
      pairagraph:
        ` La gran comunidad que es hotel journals permite conectar a todos los que trabajamos en el mundo hostelero y los que 
          quieren hacer parte de este mundo increíble. Además de consejos y recomendaciones la comunidad siempre comparte experiencias
          y momentos divertidos que permiten traer ese toque de humor que es lo que marca la diferencia en un universo muy profesional 
          y con muchas responsabilidades
        `,
      // pairagraph:
      //   `
      //   The large community that is Hotel Journals allows to connect all those 
      //   who work in the hospitality world and those who want to be part of this
      //   incredible world.
      //   `,
      profile_link: 'https://www.linkedin.com/in/gaetanmeo/'

    },
    {
      img: testimonialImg3,
      name: "Ana Mantero García",
      role: "Receptionist",
      pairagraph:
        ` Gracias a Hotel Journals he conocido otros campos dentro 
        del sector además de testimonios y anécdotas increíbles de 
        compañeros para así aprender mucho mas de ellos.
        `,
      // pairagraph:
      //   `
      // Thanks to Hotel Journals I have known other fields within 
      // the sector as well as incredible testimonies and anecdotes 
      // of colleagues to learn much more about them
      // `,
      profile_link: 'https://www.linkedin.com/in/ana-mantero-garc%C3%ADa-32b750171/'
    },
    {
      img: testimonialImg4,
      name: "Rita Medina",
      role: "Blank",
      pairagraph:
        `
        La comunidad de Hotel Journals es única y muy necesaria para todas aquellas personas que,
        como yo, se dedican al sector turístico.
        Te da herramientas para crecer profesionalmente, 
        estés donde estés… ¡me encanta!
        `,
      profile_link: 'https://www.linkedin.com/in/ritamedinapaez/'
    },
  ];

  // const book_data = [
  //   {
  //     img: bookimg2,
  //   },
  //   {
  //     img: bookimg3,
  //   },
  //   {
  //     img: bookimg4,
  //   },
  //   {
  //     img: bookimg5,
  //   },
  // ];



  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.firstSection}>
          <div className={styles.firstSectionleft}>
            <h1 data-aos="fade-up"  >
              Expand your knowledge with
              <h1
                style={{ color: "#e4b49d", marginTop: '1vw' }}
              >
                Hotel Journals </h1>
            </h1>
            {/* <p data-aos="fade-up" data-aos-delay="300" >
              Find the best hotel and tourism studies you need to continue
              growing in the sector professionally.
              You will find courses to start your career in the sector.
              Having good training will help you to open the first doors
              or to continue opening the best doors into the future.
            </p> */}
            <p data-aos="fade-up" data-aos-delay="300" >
              Amplía tus conocimientos con Hotel Journals.
              Encuentra los mejores estudios de hotelería y turismo que necesitas
              para seguir creciendo profesionalmente dentro del sector.
              Encontrarás cursos para iniciar tu carrera en el sector.
              Tener una buena formación te ayudará a abrir las primeras puertas
              o a seguir abriendo las mejores puertas hacia el futuro.
            </p>

            <div className={styles.firstectionbuttoncontainer}>
              <Link to='/courses' style={{ textDecoration: 'none', color: 'white' }}>
                {/* <div className={styles.button} data-aos="fade-right" data-aos-delay="400"> Join Class</div> */}
                <div className={styles.button} data-aos="fade-right" data-aos-delay="400">
                  Únete a nuestras clases
                </div>

              </Link>
              {/* <div className={styles.button} data-aos="fade-left" data-aos-delay="500" >Get Started</div> */}
            </div>
            <div className={styles.detail}>
              {/* <h1> Flexible Classes  </h1> */}
              <h1> Clases Flexibles  </h1>
              {/* <h1> Experienced Universities </h1> */}
              <h1> Universidades Reconocidas </h1>
            </div>

          </div>
          <div className={styles.firstSectionright}>
            <div className={styles.circlecontiner}>
              <img data-aos="fade-up" data-aos-delay="300" src={courseImage} alt="" />
            </div>
          </div>

          <div className={styles.cardcontainer}>

            {card_items.map((e) => (
              <div className={styles.card}>
                <div className={styles.cardlogo}>{e.icon}</div>
                <p
                  className="text-white"
                > {e.pairagraph}</p>

              </div>
            ))}
          </div>
        </div>

        {/* first section completed  */}



        {/*feauture course section  */}

        <div className={styles.feauturecontainer}>
          <div className={styles.feautureheading}>
            <h1 data-aos="fade-right" data-aos-delay="300">
              Explore featured <br />courses
            </h1>
            <Link to={'/courses'} style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>
              <h1 data-aos="fade-left" >view all</h1>
            </Link>
            <div data-aos="fade-right" duration="3000" data-aos-delay="350" className={styles.featurecircle}></div>

          </div>

          <div className={styles.feauturecardcontiner}>
            {course_data.map((e) => (
              <div className={styles.featurecard}>
                <div className={styles.featurecardimg}><img src={e.img} alt="" /></div>
                <div className={styles.featurecardimgdetail}>
                  <h1>{e.tittle}</h1>
                  <p>{e.name}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        {/*feauture course section  end */}

        {/*talent section  */}
        <div className={styles.tailentcontainer}>
          <div className={styles.tailentcontainerleft}>
            <h1 data-aos="fade-up" data-aos-delay="100" className={styles.tailentcontainerleftheding}>
              {/* where talent meets opportunity */}
              Donde el talento y la oportunidad se unen.
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              {/* Find your first job or look for the job that really makes you happy.
              Opportunities don't disappear, they just change. */}
              Encuentra tu primer trabajo o busca el trabajo que realmente te haga feliz.
              Las oportunidades no desaparecen, solo cambian.
            </p>
            <Link to={'/jobs'} style={{ textDecoration: 'none', color: 'white' }}>
              <div className={styles.tailentcontainerleftbutton} data-aos="fade-up" >
                {/* Find Job */}
                Encuentra tu trabajo perfecto.
              </div>
            </Link>
          </div>

          {/* <div className={styles.tailentcontainerright}>
            <div className={styles.tailentcontainerrightleft}>

              {Job_left_data.map((e) => (
                <div className={styles.tailentcard}>
                  <h1>  {e.Job_role} </h1>
                  <div className={styles.tailentcarddetail}>
                    <h1>{e.Job_catagory}</h1>
                    <h1>{e.Salary}</h1>
                    <h1>{e.Timing}</h1>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.tailentcontainerrightright}>
              <div className={styles.tailentcontainerrightleft}>
                {Job_right_data.map((e) => (
                  <div className={styles.tailentcard}>
                    <h1>  {e.Job_role} </h1>
                    <div className={styles.tailentcarddetail}>
                      <h1>{e.Job_catagory}</h1>
                      <h1>{e.Salary}</h1>
                      <h1>{e.Timing}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div> */}

          <div className='col-md-6' >
            <img src={jobGraphImg} alt="career-img" className="img-responsive mt-3" />
          </div>


          {/* 
          <div> 
              <img src={careerImg} 
              style={{height:'500px',width:'500px'}}
              className="img-responsive" alt="career-image" />
          </div> */}

        </div>
        {/* section testinomials start */}

        <div className={styles.testinomialcontainer}>
          <div className={styles.testinomialcontainerleft}>
            <h1 data-aos="fade-right">
              {/* Testimonials from our colleagues */}
              Testimonios de nuestras/os Compis

              {/* <span > courTyz'z</span> */}
              {/* member */}
            </h1>
            <p data-aos="fade-left" >
              {/* The Hotel Journals community would be
              nothing without the colleagues who accompany
              and encourage us along the way. */}
              La comunidad de Hotel Journals no sería nada sin
              los compis que nos acompañan
              y animan en el camino.
            </p>
          </div>
          <div className={styles.testinomialcontainerright}>
            <Slider {...settings} >

              {testimonial_data.map((testimonial) => (
                <div className={styles.testinomialrightcard}>
                  <div className={styles.testinomialprofilecontainer}>
                    <div className={styles.testionmialprofileimage}><img src={testimonial.img} alt="testimonial-img" /></div>
                    <div className={styles.testionmialprofiledetail}>
                      <h1>{testimonial.name}</h1>
                      <p>{testimonial.role} </p>
                    </div>
                  </div>
                  <p>{testimonial.pairagraph.substr(0, 200)}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* section testinomials end */}

        {/* section  word from the author  */}
        <div className={styles.authorcontainer}>
          <div className={styles.authorcontainerleft}>
            <div className={styles.authorimg}>
              <img data-aos="fade-up" src={pinkimg} alt="" />
            </div>
          </div>
          <div className={styles.authorcontainerright}>
            {/* <h1 data-aos="fade-up"  >  A Little Bit About Me </h1> */}
            <h1 data-aos="fade-up"  >
              Un poco sobre mí
            </h1>
            {/* <h1 >  A Little Bit About Me </h1> */}
            <p data-aos="fade-up" data-aos-delay="100" >
              {/* <p> */}
              {/* I have always been in love with hotels and tourism, I studied and worked for my dream.
              Now my dream is that more people can work in what they love and they can be proud of it.
              Get to know me (where read more is) */}
              Siempre estuve enamorada de los hoteles, estudié y trabajé por mi sueño.
              Ahora mi sueño es que más personas puedan trabajar de lo que
              sueñan y puedan presumir de ello.
            </p>

            <a href={`${baseURl}/about`} style={{ textDecoration: 'none', color: 'white' }}>
              <div data-aos="fade-up" data-aos-delay="200" className={styles.authorbutton} >
                {/* Read More */}
                Conóceme
              </div>
            </a>
          </div>
        </div>

        {/* section  word from the author end  */}

        {/* section book  */}

        <div className={styles.bookcontainer}>
          <div className={styles.bookcontainerleft}>
            <div className={styles.bookimg}><img src={bestbokkimg} alt="" /></div>
            <div className={styles.bookdetail}>
              <h1>Front Office</h1>
              <p>By Naira Siverio</p>
              <a href={`${baseURl}/journals`} style={{ textDecoration: 'none', color: 'white' }}>
                <div className={styles.bookbutton}>
                  View More
                </div>
              </a>
            </div>


          </div>
          <div className={styles.bookcontainerright}>
            <motion.div initial={{ x: 450, y: -100 }} whileInView={{ x: "-10%", y: 0 }} transition={{ ease: "easeOut", duration: 2 }} className={styles.bookrightimagecard}>
              <img

                src={bookimg2}
                alt=""
              />

            </motion.div>

            <motion.div initial={{ x: 350, y: -100 }} whileInView={{ x: "-10%", y: 0 }} transition={{ ease: "easeOut", duration: 2 }} className={styles.bookrightimagecard}>
              <img

                src={bookimg3}
                alt=""
              />

            </motion.div >
            <motion.div initial={{ x: 170, y: -100 }} whileInView={{ x: "-10%", y: 0 }} transition={{ ease: "easeOut", duration: 1.9 }} className={styles.bookrightimagecard}>
              <img

                src={bookimg5}
                alt=""
              />

            </motion.div >
            <motion.div initial={{ x: 50, y: -100 }} whileInView={{ x: "-10%", y: 0 }} transition={{ ease: "easeOut", duration: 1.9 }} className={styles.bookrightimagecard}>
              <img

                src={bookimg4}
                alt=""
              />

            </motion.div >
          </div>
        </div>



      </div>
    </>
  );
};

export default HotelLandingpage;
