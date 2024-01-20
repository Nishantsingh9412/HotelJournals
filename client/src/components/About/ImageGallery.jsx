import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="https://picsum.photos/1200/300/?blur=2" onDragStart={handleDragStart} role="presentation" />,
    <img src="https://picsum.photos/1200/300/?blur=4" onDragStart={handleDragStart} role="presentation" />,
    <img src="https://picsum.photos/1200/300/?blur=1" onDragStart={handleDragStart} role="presentation" />,
    <img src="https://picsum.photos/1200/300/?blur=9" onDragStart={handleDragStart} role="presentation" />,
    <img src="https://picsum.photos/seed/picsum/1200/300" onDragStart={handleDragStart} role="presentation" />,
    <img src="https://picsum.photos/400/300/?blur=2" onDragStart={handleDragStart} role="presentation" />,
  ];

  const responsive = {
    0: { items: 4 },
    568: { items: 4 },
    1024: { items: 4 },
  }

const ImageGallery = () => {
  return (
    <div className='container mt-2'>
          <AliceCarousel mouseTracking items={items}  responsive={responsive} />
    </div>
  )
}

export default ImageGallery
