import React from 'react'

import book4 from '../../assets/img/book4.jpg'
import book5 from '../../assets/img/book5.jpg'
import book6 from '../../assets/img/book6.jpg'
import book7 from '../../assets/img/book7.jpg'
import book8 from '../../assets/img/book8.jpg'
import bookLarge from '../../assets/img/book_large.png'

import style from './FeaturedBooks.module.css'
import './Books.css'



const FeaturedBooks = () => {
    return (
        <div className='container' style={{ maxWidth: "90%" }}>
            <div className='pt-4 ml-5 featured-books-container'>
                <h3> Featured Books </h3>
                <hr className='' style={{ border: '2px solid black', width: '10vw', }} />
                <span className='p-0 m-0'> Handpicks need just for you   </span>


                {/* main row for featured books */}
                <div className='row main-row-featured-books pt-3 flex-wrap-reverse justify-content-center'>
                    {/* small Books */}
                    <div className='col-md-8 col-sm-12'>

                        {/* sub row for featured books */}
                        <div className="row featured-books-row align-items-center justify-content-around">{/* row start */}
                            {/* card 1 start */}
                            <div className='mb-4 book-card' style={{ display: "flex", }}>
                                <img src={book4}
                                    className={`${style.bookStyleTopBooks} img-responsive`}
                                    alt="book1"
                                />
                                <div className='pt-4' style={{ textAlign: 'left', paddingLeft: '1vw' }}>
                                    <h5>Creador</h5>
                                    <div>
                                        <i className="fa-regular fa-star" ></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className='mt-1'>
                                        In Stock
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?</p>

                                </div>
                            </div>

                            {/* card 2 start */}
                            <div className='mb-4 book-card' style={{ display: "flex", }}>
                                <img
                                    src={book5}
                                    className={`${style.bookStyleTopBooks} img-responsive`}
                                    alt="book1"
                                />
                                <div className='pt-4' style={{ textAlign: 'left', paddingLeft: '1vw' }}>
                                    <h5>Front Office Agenda</h5>
                                    <div>
                                        <i className="fa-regular fa-star" ></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className='mt-1'>
                                        In Stock
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?</p>

                                </div>
                            </div>

                            {/* card 3 start */}
                            <div className='mb-4 book-card' style={{ display: "flex", }}>
                                <img
                                    src={book6}
                                    className={`${style.bookStyleTopBooks} img-responsive`}
                                    alt="book1"
                                />
                                <div className='pt-4' style={{ textAlign: 'left', paddingLeft: '1vw' }}>
                                    <h5>Front Office Agenda</h5>
                                    <div>
                                        <i className="fa-regular fa-star" ></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className='mt-1'>
                                        In Stock
                                    </div>
                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?</p>

                                </div>
                            </div>
                            {/* card 4 start */}
                            <div className='mb-4 book-card' style={{ display: "flex", }}>
                                <img
                                    src={book7}
                                    className={`${style.bookStyleTopBooks} img-responsive`} 
                                    alt="book1"
                                />
                                <div className='pt-4' style={{ textAlign: 'left', paddingLeft: '1vw' }}>
                                    <h5>Front Office Agenda</h5>
                                    <div>
                                        <i className="fa-regular fa-star" ></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className='mt-1'>
                                        In Stock
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?</p>

                                </div>
                            </div>
                        </div>{/* row end */}

                    </div>


                    {/* column for large book */}
                    <div className='col-md-3 col-sm-12 large-book-col '>
                        <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: 'wrap' }}>

                            {/* large book image */}
                            <img src={bookLarge} className='img-responsive large-book-image' alt="book1" style={{ boxShadow: "rgb(22, 27, 27) 2px 4px 10px", borderRadius: '2%', }} />
                            <div className='pt-4'>
                                <h5>Front Office Agenda</h5>
                                <div>
                                    <i className="fa-regular fa-star" ></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                                <div className='mt-1'>
                                    In Stock
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?</p>

                            </div>
                        </div>
                    </div>






                </div>

                {/* <div className='row pt-2'>
                    hi
                </div> */}
            </div>

        </div>
    )
}

export default FeaturedBooks
