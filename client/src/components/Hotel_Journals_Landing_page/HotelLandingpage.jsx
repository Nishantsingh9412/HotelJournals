import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { easeIn, easeInOut, motion } from "framer-motion";
import circleimg from "../../assets/hotaljournalimg/circleimg.png";
import pinkimg from "../../assets/hotaljournalimg/pink-img.png";
import userimg1 from "../../assets/hotaljournalimg/testmonial/img1.avif";
import userimg2 from "../../assets/hotaljournalimg/testmonial/img2.jpg";
import courseimg1 from "../../assets/hotaljournalimg/course_img/img1.avif";
import courseimg2 from "../../assets/hotaljournalimg/course_img/img2.avif";
import courseimg3 from "../../assets/hotaljournalimg/course_img/img3.avif";
import courseimg4 from "../../assets/hotaljournalimg/course_img/img4.avif";
import courseimg5 from "../../assets/hotaljournalimg/course_img/img5.avif";
import courseimg6 from "../../assets/hotaljournalimg/course_img/img6.avif";
import bookimg2 from "../../assets/hotaljournalimg/book_img/img2.jpg";
import bookimg3 from "../../assets/hotaljournalimg/book_img/img3.jpeg";
import bookimg4 from "../../assets/hotaljournalimg/book_img/img4.jpg";
import bookimg5 from "../../assets/hotaljournalimg/book_img/img5.jpg";
import bestbokkimg from "../../assets/hotaljournalimg/book_img/img11.jpg";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaGoogleWallet } from "react-icons/fa";
// import styles  from "./HotelLandingPage.module.css";
//  import courseimg1 from "../../assets/hotaljournalimg/course_img/img1.avif"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './HotelLandingPage.module.css'
const HotelLandingpage = () => {

     useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])

  const card_items = [
    {
      icon: <FaHeart />,
      pairagraph: "Lorem ipsum dolor dolorem voluptas? Lorem, ipsum dolor.",
    },
    {
      icon: <FaStar />,
      pairagraph: "Lorem ipsum dolor dolorem voluptas? Lorem, ipsum dolor.",
    },
    {
      icon: <FaGoogleWallet />,
      pairagraph: "Lorem ipsum dolor dolorem voluptas? Lorem, ipsum dolor.",
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
      img: userimg1,
      name: "only Soery",
      role: "Dark plane member",
      pairagraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing ique faj hsh  kjhdh d adha  k hd ah o ahh  ah dh  h  ahd al h  ",
    },
    {
      img: userimg2,
      name: "only Soery",
      role: "Dark plane member",
      pairagraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing ique faj hsh  kjhdh d adha  k hd ah o ahh  ah dh  h  ahd al h ",
    },
    {
      img: "../assets/hotaljournalimg/testmonial/img1.avif",
      name: "only Soery",
      role: "Dark plane member",
      pairagraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing ique faj hsh  kjhdh d adha  k hd ah o ahh  ah dh  h  ahd al h ",
    },
    {
      img: "../assets/hotaljournalimg/testmonial/img1.avif",
      name: "only Soery",
      role: "Dark plane member",
      pairagraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing ique faj hsh  kjhdh d adha  k hd ah o ahh  ah dh  h  ahd al h ",
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
              Study Together With{" "}
              <span className="]">Courtzy</span> Anywhere
            </h1>
            <p  data-aos="fade-up"  data-aos-delay="300" >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              minus recusandae corporis dolore cum animi? Nobis suscipit eaque
              quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae, rerum? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Consectetur, accusantium.
            </p>
            <div className={styles.firstectionbuttoncontainer}>
              <div className={styles.button}   data-aos="fade-right"  data-aos-delay="400"> Join Class</div>
              <div className={styles.button}  data-aos="fade-left"  data-aos-delay="500" >Get Started</div>
            </div>
            <div className={styles.detail}>
              <h1>Flexible Class</h1>
              <h1>Exprienced Mentor</h1>
            </div>

          </div>
          <div className={styles.firstSectionright}>
            <div className={styles.circlecontiner}>
              <img data-aos="fade-up"  data-aos-delay="300" src={circleimg} alt="" />
            </div>
          </div>

        <div className={styles.cardcontainer}>

          {card_items.map((e) => (
            <div className={styles.card}>
              <div className={styles.cardlogo}>{e.icon}</div>
              <p> {e.pairagraph}</p>

            </div>

          ))}
        </div>
        </div>

        {/* first section completed  */}

        

        {/*feauture course section  */}

        <div className={styles.feauturecontainer}>
          <div className={styles.feautureheading}>
            <h1 data-aos="fade-right"  data-aos-delay="300">
              Explore featured <br />courses
            </h1>
            <h1 data-aos="fade-left" >view all</h1>
            <div  data-aos="fade-right" duration="3000"  data-aos-delay="350" className={styles.featurecircle}></div>

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
            <div className={styles.tailentcontainerleftbutton}  data-aos="fade-up" >For Tailent</div>
            <h1  data-aos="fade-up"  data-aos-delay="100"  className={styles.tailentcontainerleftheding}>
              where talent meets opportunity
            </h1>
            <p data-aos="fade-up"  data-aos-delay="100">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. delectus
              dolore optio assumenda amet provident facere nam!*2
            </p>
          </div>
          <div className={styles.tailentcontainerright}>
            <div className={styles.tailentcontainerrightleft}>
              {/* left card  */}
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
            {/* right card  */}

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

          </div>
        </div>
        {/* section testinomials start */}

        <div className={styles.testinomialcontainer}>
          <div className={styles.testinomialcontainerleft}>
            <h1  data-aos="fade-right">
              Tetimonials from <span > courTyz'z</span>
              member
            </h1>
            <p data-aos="fade-left" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. totam
              ipsam!
            </p>
          </div>
          <div className={styles.testinomialcontainerright}>
            <Slider {...settings} >
            {testimonial_data.map((e) => (
              <div className={styles.testinomialrightcard}>
                <div className={styles.testinomialprofilecontainer}>
                  <div className={styles.testionmialprofileimage}><img src={e.img} alt="" /></div>
                  <div className={styles.testionmialprofiledetail}>
                    <h1>{e.name}</h1>
                    <p>{e.role}</p>
                  </div>

                </div>
                <p>{e.pairagraph}</p>
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
            <h1 data-aos="fade-up" > A  Word from the Author</h1>
            <p  data-aos="fade-up" data-aos-delay="100" >
                
                Lorem, ipsum. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Impedit, porro., debitis voluptatum illum ad
                voluptates praesentium? Modi error veniam vel expedita incidunt.
              </p>
              <div data-aos="fade-up" data-aos-delay="200"  className= {styles.authorbutton} >
                Read More
              </div>
          </div>
        </div>

         {/* section  word from the author end  */}

        {/* section book  */}

         <div className={styles.bookcontainer}>
         <div className={styles.bookcontainerleft}>
          <div className={styles.bookimg}><img src={bestbokkimg} alt="" /></div>
         <div className={styles.bookdetail}>
          <h1>The Greate Gestby</h1>
          <p>by fscot men</p>
          <div className={styles.bookbutton}>View more</div>
         </div>
      
         
         </div>
         <div className={styles.bookcontainerright}>
          <motion.div  initial={{x:450 , y:-100}} whileInView={{x:"-10%" ,y:0}}  transition={{   ease:"easeOut", duration:2}}  className={styles.bookrightimagecard}>
          <img
                 
                  src={bookimg2}
                  alt=""
                />

          </motion.div>

          <motion.div  initial={{x:350,y:-100}} whileInView={{x:"-10%",y:0}}  transition={{   ease:"easeOut", duration:2}} className={styles.bookrightimagecard}>
          <img
                
                  src={bookimg3}
                  alt=""
                />
                
          </motion.div >
          <motion.div initial={{x:170,y:-100}} whileInView={{x:"-10%",y:0}}  transition={{ease:"easeOut", duration:1.9}} className={styles.bookrightimagecard}>
          <img
                
                  src={bookimg5}
                  alt=""
                />
                
          </motion.div >
          <motion.div  initial={{x:50,y:-100}} whileInView={{x:"-10%",y:0}}  transition={{ ease:"easeOut", duration:1.9}} className={styles.bookrightimagecard}>
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
