import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import image1 from '../../assets/img/hj-1.jpg';
import image2 from '../../assets/img/hj-2.jpg';
import image3 from '../../assets/img/hj-3.jpg';
import image4 from '../../assets/img/hj-4.jpg';
import image5 from '../../assets/img/hj-5.jpg';
import image6 from '../../assets/img/hj-6.jpg';

const imageStyle = {
  width: '210px',
  height: '200px',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: '10px',
  cursor: 'pointer',
};

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={image1} alt='author_image1' onDragStart={handleDragStart} role="presentation"  style={imageStyle}/>,
    <img src={image2} alt='author_image2' onDragStart={handleDragStart} role="presentation" style={imageStyle} />,
    <img src={image3} alt='author_image3' onDragStart={handleDragStart} role="presentation" style={imageStyle} />,
    <img src={image4} alt='author_image4' onDragStart={handleDragStart} role="presentation" style={imageStyle} />,
    <img src={image5} alt='author_image5' onDragStart={handleDragStart} role="presentation" style={imageStyle} />,
    <img src={image6} alt='author_image6' onDragStart={handleDragStart} role="presentation" style={imageStyle} />,
  ];

  const responsive = {
    0: { items: 2, stagePadding: { paddingLeft: 10, paddingRight: 10 } }, // Adjust the padding values as needed
    568: { items: 3 },
    1024: { items: 4 },
  };
const ImageGallery = () => {
  return (
    <div className='container mt-5'>
          <AliceCarousel mouseTracking items={items}  responsive={responsive}  />
    </div>
  );
};

export default ImageGallery;
