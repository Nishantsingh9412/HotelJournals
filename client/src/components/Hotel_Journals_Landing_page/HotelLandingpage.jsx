import React, { useEffect } from "react";
import AOS from 'aos';
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaGoogleWallet } from "react-icons/fa";
import { easeIn, easeInOut, motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

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
import 'aos/dist/aos.css';
//  import courseimg1 from "../../assets/hotaljournalimg/course_img/img1.avif"

const HotelLandingpage = () => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])
  
  const card_items = [
    {
      icon: <FaHeart className="text-white text-[1.8vw]" />,
      pairagraph: "Lorem ipsum dolor dolorem voluptas? Lorem, ipsum dolor.",
    },
    {
      icon: <FaStar className="text-white text-[1.8vw]" />,
      pairagraph: "Lorem ipsum dolor dolorem voluptas? Lorem, ipsum dolor.",
    },
    {
      icon: <FaGoogleWallet className="text-white text-[1.8vw]" />,
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
  ];

  const book_data = [
    {
      img: bookimg2,
    },
    {
      img: bookimg3,
    },
    {
      img: bookimg4,
    },
    {
      img: bookimg5,
    },
  ];


  
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
      <div className="w-full h-auto ">
        {/* first section  */}
        <div className="bg-[#FAF1EA] sm:h-[95vh] h-[80vh] sm:max-md:h-[70vh]   w-full sm:flex-row flex   flex-col sm:px-[6vw]  relative">
          <div  className="sm:w-[50%] w-[100%] sm:h-[80%] h-[70%]    py-[5vw]  flex flex-col  pl-[3vw]  gap-[2vw]">
            <h1 data-aos="fade-up"   className="sm:text-[3vw]  text-[5vw] font-[900] sm:w-[30vw] w-[40vw] text-[#110D32]">
              Study Together With{" "}
              <span className="text-[#B4C2D6]">Courtzy</span> Anywhere
            </h1>
            <p  data-aos="fade-up"  data-aos-delay="300" className="sm:text-[.8vw] cdtext-[1.4vw]  text-[3vw] sm:w-[30vw] w-[70vw]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              minus recusandae corporis dolore cum animi? Nobis suscipit eaque
              quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae, rerum? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Consectetur, accusantium.
            </p>
            <div className=" flex  sm:w-[17vw] w-[50vw] sm:h-[3vw] h-[8vw] justify-between font-bold ">
              <div data-aos="fade-right"  data-aos-delay="400" className="bg-[#E4B49D] rounded-2xl sm:rounded-[100px] sm:p-[1vw] p-[3vw]  flex items-center justify-center sm:text-[1vw] text-[3vw] cursor-pointer">
                Join Class
              </div>
              <div data-aos="fade-left"  data-aos-delay="500" className=" bg-white rounded-2xl sm:rounded-[100px] sm:p-[1vw] p-[3vw]   flex items-center justify-center sm:text-[1vw] text-[3vw] cursor-pointer">
                Get Started
              </div>
            </div>
            <div className="flex gap-[2vw]">
              <h1>Flexible Class</h1>
              <h1>Exprienced Mentor</h1>
            </div>
          </div>
          <div className="sm:w-[50%] w-[100%] sm:h-[80%] h-[70%]   flex sm:pt-[60px] pt-[30px] justify-center ">
            <div className=" bg-[#E4B49D] sm:w-[25vw] w-[55vw] sm:h-[25vw] h-[55vw] relative rounded-[50%] overflow-hidden   ">
              <img data-aos="fade-up"  data-aos-delay="300"
                className=" object-cover w-[100%] absolute"
                src={circleimg}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* first section end */}

        {/* card of first section  */}
        <div className=" sm:absolute hidden bottom-[-17vw] sm:max-md:bottom-[-5vw]  w-full  h-[35vh] sm:max-md:px-[5vw]  px-[12vw] sm:flex justify-between ">
          {card_items.map((e) => (
            <div className="bg-[#B4C2D6] sm:max-md:h-[200px]  sm:max-md:w-[200px] h-[12vw] w-[18vw] rounded-[20px] flex items-center justify-center gap-[1vw]  flex-col">
              <div className="bg-[#E4B49D] flex items-center justify-center rounded-[50%] h-[3.5vw] w-[3.5vw]">
                {e.icon}
              </div>
              <p className="text-black  px-[1.5vw] text-[1vw] w-[80%]">{e.pairagraph}</p>
            </div>
          ))}
        </div>
        {/* card of first section end  */}

        {/*feauture course section  */}
        <div className="	mt-[15vw] sm:h-[50vh] h-[100vh]   px-[6vw] w-full">
          <div className=" relative h-[15vh] flex  justify-between items-center">
            <h1 data-aos="fade-right"  data-aos-delay="300" className="sm:max-md:text-[3vw]  text-[5vw] sm:text-[2.5vw] w-[50vw] sm:w-[25vw] font-[900] ">
              Explore featured courses
            </h1>
            <h1 data-aos="fade-left"   className=" font-[900] sm:max-md:text-[3vw] text-[3.3vw] sm:text-[2vw]">
              view all
            </h1>
            <div data-aos="fade-right" duration="3000"  data-aos-delay="350" className="absolute z-[-1] sm:max-md:top-[4.5vw] top-[4.5vw]  sm:top-[.2vw] left-[-2vw] sm:left-[-1.22vw] bg-[#E4B49D] h-[40px] w-[40px] rounded-[50%]"></div>
          </div>
          <div className=" p-[0.5vh] sm:max-md:h-[35vh] sm:h-[30vh]   h-[80%]  flex flex-wrap justify-between ">
            {course_data.map((e) => (
              <div className="bg-white  h-[10vh] flex  sm:max-md:w-[320px] w-[300px] sm:w-[25vw]  rounded-[5px] p-[0.5vw] shadow-[#E4B49D] shadow-2xl">
                <div className=" w-[30%] h-[100%]  ">
                  {" "}
                  <img className="h-[100%] w-[80%]" src={e.img} alt="" />{" "}
                </div>
                <div className=" w-[70%] h-[100%] ">
                  <h1 className="text-[15px] font-bold ">{e.tittle}</h1>
                  <p>{e.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*feauture course section  end */}

        {/*talent section  */}
        <div className=" mt-[8vw] w-full h-[100vh] sm:h-[50vh]  flex-col  flex sm:flex-row sm:max-md:px-[2vw] px-[6vw] ">
          <div className="sm:w-[40%] w-[100%] sm:h-[100%] h-[40%]  flex flex-col   sm:gap-[3vw] gap-[8vw]  ">
            <div data-aos="fade-up"   className=" shadow shadow-[#FAF1EA]   bg-[#E4B49D] rounded-[90px] p-[0vw] h-[8vw] sm:h-[4vw] sm:w-[10vw] w-[30vw] flex items-center justify-center  sm:text-[1vw] text-[4vw] cursor-pointer  font-bold ">
              For Talent
            </div>
            <h1 data-aos="fade-up"  data-aos-delay="100" className=" text-[4.3vw] sm:text-[2.6vw] font-[900] sm:w-[25vw] w-[40vw] text-[#E4B49D]">
              where talent meets opportunity
            </h1>
            <p data-aos="fade-up"  data-aos-delay="100" className=" sm:w-[30vw] text-[] w-[80vw]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. delectus
              dolore optio assumenda amet provident facere nam!*2
            </p>
          </div>

          <div className="  sm:w-[60%] w-[100%] sm:h-[100%] h-[60%]  flex flex-col sm:flex-row overflow-hidden">
            {/* left  */}

            <div className="p-[1vw]  h-[80vh] sm:h-[100%] sm:w-[50%] w-[100%] flex flex-col items-center justify-evenly  gap-[2vw] sm:gap-[0vw] ">
              {Job_left_data.map((e) => (
                <motion.div
                  initial={{ y: 300 }}
                  animate={{ y: "-500%" }}
                  transition={{ repeat: Infinity, ease: "easeIn", duration: 4 }}
                  className="p-[0.5vw] rounded-[4px] bg-white sm:h-[10vh] sm:max-md:h-[7vh] h-[8vh] sm:max-md:w-[95%] w-[85%] flex flex-col gap-[8px] shadow-[#E4B49D]  shadow-2xl px-[2vw] "
                >
                  <h1 className=" font-[900] sm:text-[1.2vw] text-[2.5vw]">
                    {e.Job_role}{" "}
                  </h1>
                  <div className=" flex  justify-between">
                    <h1 className="sm:text-[1vw] text-[2.5vw]">
                      {" "}
                      {e.Job_catagory}
                    </h1>

                    <h1 className="sm:text-[1vw] text-[2.5vw] "> {e.Salary}</h1>

                    <h1 className="sm:text-[1vw] text-[2.5vw] "> {e.Timing}</h1>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* right  */}
            <div className="p-[1vw] h-[100%] sm:w-[50%] w-[100%] flex flex-col items-center justify-evenly gap-[2vw] sm:gap-[0vw]  ">
              {Job_right_data.map((e) => (
                <motion.div
                  initial={{ y: 450 }}
                  animate={{ y: "-500%" }}
                  transition={{ repeat: Infinity, ease: "easeIn", duration: 4 }}
                  className="p-[0.5vw] rounded-[4px] bg-white sm:h-[10vh] sm:max-md:h-[7vh] h-[8vh] sm:max-md:w-[95%] w-[85%] flex flex-col gap-[8px] shadow-[#E4B49D] shadow-2xl px-[2vw] "
                >
                  <h1 className=" font-[900] sm:text-[1.2vw] text-[2.5vw] ">
                    {e.Job_role}{" "}
                  </h1>
                  <div className=" flex  justify-between">
                    <h1 className="sm:text-[1vw] text-[2.5vw] ">
                      {" "}
                      {e.Job_catagory}
                    </h1>

                    <h1 className="sm:text-[1vw] text-[2.5vw] "> {e.Salary}</h1>

                    <h1 className="sm:text-[1vw] text-[2.5vw] "> {e.Timing}</h1>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/*talent section end */}

        {/* section testinomials */}

        <div className=" mt-[8vw] flex-col sm:flex-row flex px-[4vw] sm:px-[3vw] sm:h-[40vh] sm:max-md:h-[25vh] h-[60vh] gap-[3vw] sm:gap-[0vw] w-full ">
          <div className="sm:w-[40%] ml-[7vw] sm:ml-[0vw] w-[80%] h-[100%] shadow-[#E4B49D] shadow-xl px-[2vw] items-center sm:items-start flex flex-col justify-center gap-[8vw] sm:gap-[0.5vw] relative">
            <div className=" z-[-1] h-[30px] w-[30px] rounded-[50%] absolute top-0"></div>
            <h1 data-aos="fade-right"  className="  sm:text-[2.5vw] text-[6vw] font-[900] sm:w-[20vw] w-[70vw] text-[#464C6A]">
              Tetimonials from <span className="text-[#E4B49D]">courTyz'z</span>{" "}
              member
            </h1>
            <p data-aos="fade-left" className=" w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. totam
              ipsam!
            </p>
          </div>

          <div className=" bg-[#4d4c4b]  h-[100%]  sm:w-[60%] w-[100%] sm:py-[0.5vw] py-[2.5vw] px-[6vw] sm:px-[2vw]  sm:max-md:px-[3vw] ">
            <Slider {...settings} >
              {testimonial_data.map((e) => (
                <div className=" p-[0.5vw] bg-white sm:h-[16vw] sm:w-[25vw]  flex flex-col  gap-1  rounded-md">
                  <div className=" p-[0.5vw] h-[40%] w-[95%] flex gap-4 items-center">
                    <div className="  rounded-[50%] h-[40px] w-[40px]">
                      <img
                        className="h-[100%] w-[100%] object-cover object-top rounded-[50%]"
                        src={e.img}
                        alt=""
                      />
                    </div>
                    <div className=" w-[80%] h-[95%] p-[4px]">
                      <h1 className="font-bold">{e.name}</h1>
                      <p className="sm:text-[1vw] sm:max-md:text-[1.5vw]">{e.role}</p>
                    </div>
                  </div>
                  <p className="">{e.pairagraph}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* section testinomials end */}

        {/* section  word from the author  */}

        <div className="sm:max-md:h-[36vh] sm:h-[50vh] h-full sm:w-full sm:flex-row flex flex-col mt-[95px]">
          <div className=" sm:h-[100%] h-[50%] sm:w-[50%] w-[100%] flex items-center justify-center">
            <div className="bg-[#E4B49D] h-[300px] w-[300px] rounded-[50%] shadow-2xl shadow-[#f3adaa]  overflow-hidden">
              <img data-aos="fade-up" className=" object-cover" src={pinkimg} alt="" />
            </div>
          </div>
          <div className=" sm:h-[100%] h-[50%] sm:w-[50%] w-[100%] flex items-center  justify-center ">
            <div className=" sm:h-[90%] sm:max-md:h-[100%]  sm:w-[80%] sm:max-md:w-[100%] w-[100%] flex  flex-col sm:gap-[0vw] gap-[2vw] sm:max-md:gap-[1vw] p-[10px] justify-between ">
              <h1 data-aos="fade-up" className=" sm:text-[35px] text-[30px] text-[#E4B49D]  font-[900] m:w-[65%] w-[100%] ">
                A Word from the Author
              </h1>
              <p data-aos="fade-up" data-aos-delay="100" className=" sm:w-[65%] w-[100%] sm:max-md:w-[100%] ">
                {" "}
                Lorem, ipsum. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Impedit, porro., debitis voluptatum illum ad
                voluptates praesentium? Modi error veniam vel expedita incidunt.
              </p>
              <div data-aos="fade-up" data-aos-delay="200" className=" shadow hover:shadow-lg bg-[#E4B49D]  rounded-[90px] p-[0vw] h-[35px] w-[95px] flex items-center justify-center  sm:text-[10px] text-[13px] cursor-pointer  font-bold ">
                Read More
              </div>
            </div>
          </div>
        </div>
        {/* section  word from the author end  */}

        {/* section book  */}
        <div className="  w-full sm:h-[40vh] sm:max-md:h-[50vh]  h-[80vh] sm:flex-row flex flex-col items-center justify-between mt-[95px] px-[6vw] gap-[2vw] ">
          <div className="bg-white shadow-2xl shadow-[#E4B49D] sm:w-[40%] w-[100%] sm:h-[90%] h-[50%] sm:max-md:flex-col flex justify-evenly items-center rounded-[4px]">
            <div className=" w-[150PX] h-[200PX]">
              <img
                className="h-[100%] w-[100%] object-cover object-center"
                src={bestbokkimg}
                alt=""
              />
            </div>
            <div className=" w-[35%] sm:max-md:w-[50%]  h-[60%] flex flex-col gap-4 p-[10px]">
              <h1 className=" text-[15px] font-[900] ">The Greate Gestby</h1>
              <p className="text-[13px]">by fscot men</p>
              <div className=" shadow hover:shadow-lg bg-[#0D99DD] text-[#edeef1] rounded-[90px] p-[0vw] h-[30px] w-[90px] flex items-center justify-center  text-[10px] cursor-pointer  font-bold ">
                View more
              </div>
            </div>
          </div>
          <div className="  sm:w-[60%] w-[100%] sm:h-[90%] h-[60%]  flex flex-wrap justify-evenly  gap-4">
          <motion.div  initial={{x:450 , y:-100}} animate={{x:"-10%" ,y:0}}  transition={{   ease:"easeOut", duration:2}} className="bg-white sm:w-[100px] z-[-2] h-[150px] ">
                <img
                  className="h-[100%] w-[100%] object-cover object-bottom"
                  src={bookimg2}
                  alt=""
                />
              </motion.div>
              <motion.div initial={{x:350,y:-100}} animate={{x:"-10%",y:0}}  transition={{   ease:"easeOut", duration:2}} className="bg-white sm:w-[100px] z-[-1] h-[150px] ">
                <img
                  className="h-[100%] w-[100%] object-cover object-bottom"
                  src={bookimg3}
                  alt=""
                />
              </motion.div>
              <motion.div initial={{x:170,y:-100}} animate={{x:"-10%",y:0}}  transition={{ease:"easeOut", duration:1.9}} className="bg-white sm:w-[100px]  h-[150px] ">
                <img
                  className="h-[100%] w-[100%] object-cover object-bottom"
                  src={bookimg4}
                  alt=""
                />
              </motion.div>
              <motion.div initial={{x:50,y:-100}} animate={{x:"-10%",y:0}}  transition={{ ease:"easeOut", duration:1.9}} className="bg-white sm:w-[100px]  h-[150px] ">
                <img
                  className="h-[100%] w-[100%] object-cover object-bottom"
                  src={bookimg5}
                  alt=""
                />
              </motion.div>
            {/* {book_data.map((e) => (
              <motion.div initial={{x:0}} animate={{x:"-100%"}}  transition={{ repeat:Infinity  ,ease:"easeIn", duration:4}} className="bg-white sm:w-[100px]  h-[150px] ">
                <img
                  className="h-[100%] w-[100%] object-cover object-bottom"
                  src={e.img}
                  alt=""
                />
              </motion.div>
            ))} */}

            {/* <div className="bg-white w-[100px] h-[150px]"></div>
            <div className="bg-white w-[100px] h-[150px]"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelLandingpage;
