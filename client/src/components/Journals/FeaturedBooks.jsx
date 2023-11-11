import React from 'react'

import book4 from '../../assets/img/book4.jpg'
import book5 from '../../assets/img/book5.jpg'
import book6 from '../../assets/img/book6.jpg'
import book7 from '../../assets/img/book7.jpg'
import book8 from '../../assets/img/book8.jpg'
import bookLarge from '../../assets/img/book_large.png'

const bookStyleTopBooks = {
    height: '16vw',
    boxShadow: "rgb(22, 27, 27) 2px 4px 10px",
    borderRadius: '2%',
}


const FeaturedBooks = () => {
    return (
        <div className='container-fluid'>
            <div className='pt-4 ml-5 pl-4'>
                <h3> Featured Books </h3>
                <hr className='' style={{ border: '2px solid black', width: '10vw', }} />
                <span className='p-0 m-0'> Handpicks need just for you   </span>

                <div className='row pt-5'>
                    <div className='col'>
                        <div style={{ display:"flex"}}>
                            <img src={book4} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
                            <div className='pt-4' style={{ textAlign: 'left',  paddingLeft:'1vw'}}>
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

                        <div style={{ display:"flex",marginTop:'10vw'}}>
                            <img src={book5} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
                            <div  className='pt-4' style={{ textAlign: 'left', paddingLeft:'1vw' }}>
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

                    <div className='col'>
                        <div style={{ display:"flex"}}>
                            <img src={book6} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
                            <div  className='pt-4' style={{ textAlign: 'left', paddingLeft:'1vw'}}>
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

                        <div style={{ display:"flex",marginTop:'10vw'}}>
                            <img src={book7} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
                            <div  className='pt-4' style={{ textAlign: 'left',  paddingLeft:'1vw' }}>
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
                    

                    <div className='col mr-4'>
                        <div style={{ display:"flex",justifyContent: "flex-start",flexWrap: 'wrap'}}>
                            <img src={bookLarge} className='img-responsive' alt="book1" style={{ boxShadow: "rgb(22, 27, 27) 2px 4px 10px",borderRadius: '2%',}} />
                            <div  className='pt-4' style={{ textAlign: 'left', }}>
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
