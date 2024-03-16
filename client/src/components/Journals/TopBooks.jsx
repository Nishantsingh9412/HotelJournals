import React from 'react'
import book1 from '../../assets/img/front_office.jpg'
import book2 from '../../assets/img/front_office2.jpg'
import book3 from '../../assets/img/front_office3.jpg'

import './Books.css'

const bookStyleTopBooks = {
  height: '16vw',
  boxShadow: "rgb(22, 27, 27) 2px 4px 10px",
  borderRadius: '2%',
}


const TopBooks = () => {
  return (
    <div className="container" style={{ maxWidth: "90%" }}>
      <div className='top-books-container pt-4'>

        <div className='ml-5 mb-3' >
          <h3> Top Books </h3>
          <hr className='animate__animated animate__headShake animate__infinite' style={{ border: '2px solid black', width: '10vw', }} />
        </div>


        <div className='row pt-5' style={{ marginRight: '' }}>
          <div className='col-md-4 p-2 cabo_s'>
            <div className='book-card' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={book2} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
              <div style={{ textAlign: 'left', padding: '1vw', marginTop: 'auto' }}>
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



          <div className='col-md-4 p-2 cabo_s' >
            <div className='book-card' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={book1} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
              <div style={{ textAlign: 'left', padding: '1vw', marginTop: 'auto' }}>
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



          <div className='col-md-4 p-2 cabo_s'>
            <div className='book-card' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={book3} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
              <div style={{ textAlign: 'left', padding: '1vw', marginTop: 'auto' }}>
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

          <div className='col-md-4 p-2 cabo_s'>
            <div className='book-card' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={book2} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
              <div style={{ textAlign: 'left', padding: '1vw', marginTop: 'auto' }}>
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



          <div className='col-md-4 p-2 cabo_s' >
            <div className='book-card' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={book1} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
              <div style={{ textAlign: 'left', padding: '1vw', marginTop: 'auto' }}>
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



          <div className='col-md-4 p-2 cabo_s'>
            <div className='book-card' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={book3} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
              <div style={{ textAlign: 'left', padding: '1vw', marginTop: 'auto' }}>
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

        <div className='row pt-5'>
          <div className='col-md-4 p-2 cabo_s'>
            <div className='book-card' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={book2} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
              <div style={{ textAlign: 'left', padding: '1vw', marginTop: 'auto' }}>
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



          <div className='col-md-4 p-2 cabo_s' >
            <div className='book-card' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={book1} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
              <div style={{ textAlign: 'left', padding: '1vw', marginTop: 'auto' }}>
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



          <div className='col-md-4 p-2 cabo_s'>
            <div className='book-card' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={book3} className='img-responsive' alt="book1" style={bookStyleTopBooks} />
              <div style={{ textAlign: 'left', padding: '1vw', marginTop: 'auto' }}>
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


      </div>
    </div>
  )
}

export default TopBooks
