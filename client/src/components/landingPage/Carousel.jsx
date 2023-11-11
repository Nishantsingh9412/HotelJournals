import React from 'react'
import banner from '../../assets/img/banner_hj2.png'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3_.png'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide mt-2" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={banner} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={banner2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={banner3} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Carousel
