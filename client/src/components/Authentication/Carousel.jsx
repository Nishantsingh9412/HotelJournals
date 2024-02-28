// import React, { useState, useEffect } from 'react';
// import { Box, Image, Flex } from '@chakra-ui/react';
// import './InputLabelAnimation.css';
// import banner from '../../assets/img/login-img-1.png';
// import banner2 from '../../assets/img/login-img-2.png';
// import banner3 from '../../assets/img/login-img-3.png';
// import banner4 from '../../assets/img/login-img-4.png';
// import banner5 from '../../assets/img/login-img-5.png';
// import banner6 from '../../assets/img/login-img-6.png';

// const Carousel = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const images = [banner, banner2, banner3, banner4, banner5, banner6];
//     const totalSlides = images.length;

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const newSlide = (currentSlide + 1) % totalSlides;
//             setCurrentSlide(newSlide);
//         }, 5000); // Adjusted interval to 5 seconds for demonstration

//         return () => clearInterval(interval);
//     }, [currentSlide, totalSlides]);

//     return (
//         <Box
//             className="box-carousel"
//             paddingTop="10rem"
//             backgroundColor="#ff7f6eff"
//             margin="15px"
//             borderRadius="0px 30px 0px 30px"
//             bgImage={[
//                 'repeating-linear-gradient(45deg, #ffff -6.25% 6.25%, rgba(255, 255, 255, 0.10) 0 18.75%)',
//                 'repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.10) -6.25% 6.25%, #ff7f6eff 0 18.75%)',
//                 'linear-gradient(135deg, #0000 18.75%, #ff7f6eff 0 31.25%, #ffff 0, #542437 0 150%, # 0)',
//             ]}
//             bgSize={`calc(2 * var(--s)) calc(2 * var(--s))`}
//             style={{
//                 height: 'auto',
//                 // '--s': '80px',
//                 // '--c': '#ffff',
//             }}
//         >
//             <Flex
//                 direction="column"
//                 alignItems="center"
//                 justifyContent="center"
//                 w="100%"
//                 maxW="30vw"
//                 mx="auto"
//             >
//                 <Box
//                     position="relative"
//                     overflow="hidden"
//                     borderRadius="md"
//                 >
//                     <Flex
//                         w={`${totalSlides * 100}%`}
//                         transition="transform 1s" // Adjusted transition duration to 1 second
//                         className="carousel-inner"
//                         transform={`translateX(-${currentSlide * (100 / totalSlides)}%)`}
//                     >
//                         {images.map((src, index) => (
//                             <Image
//                                 key={index}
//                                 className="d-block w-100"
//                                 src={src}
//                                 alt={`Slide ${index + 1}`} width={531} height={419}
//                             />
//                         ))}
//                     </Flex>
//                 </Box>
//             </Flex>
//         </Box>
//     );
// };

// export default Carousel;


import React, { useState, useEffect } from "react";
import {
    BsArrowLeftCircleFill,
    BsArrowRightCircleFill
} from "react-icons/bs";
import './Carousell.css'
import img1 from '../../assets/img/login-img-1.png';
import img2 from '../../assets/img/login-img-2.png';
import img3 from '../../assets/img/login-img-3.png';
import img4 from '../../assets/img/login-img-4.png';
import img5 from '../../assets/img/login-img-5.png';
import img6 from '../../assets/img/login-img-6.png';

const data = [
    {
        src: img1,
        alt: "Image 1 for carousel",
    },
    {
        src: img2,
        alt: "Image 2 for carousel",
    },
    {
        src: img3,
        alt: "Image 3 for carousel",
    },
    {
        src: img4,
        alt: "Image 4 for carousel",
    },
    {
        src: img5,
        alt: "Image 5 for carousel",
    },
    {
        src: img6,
        alt: "Image 6 for carousel",
    }
]

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    const startAutoplay = () => {
        setAutoplay(true);
    };

    const stopAutoplay = () => {
        setAutoplay(false);
    };

    useEffect(() => {
        let intervalId;

        if (autoplay) {
            intervalId = setInterval(nextSlide, 5000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [slide, autoplay]);

    return (
        <div className="carousel" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
            {data.map((item, idx) => {
                return (<div key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}>
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={idx}
                        className={slide === idx ? "slide" : "slide slide-hidden"}
                    />
                    <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "28px", fontSize: "18px" }}>
                        {item.text}
                    </p>
                </div>

                );
            })}
            <BsArrowRightCircleFill
                onClick={nextSlide}
                className="arrow arrow-right"
            />
            <span className="indicators">
                {data.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx ? "indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};
export default Carousel;