import React from 'react'
import booksData from './booksData.js'
import book1 from '../../assets/img/front_office.jpg'
import book2 from '../../assets/img/front_office2.jpg'
import book3 from '../../assets/img/front_office3.jpg'

import styles from './TopBooks.module.css'
import './Books.css'

const bookStyleTopBooks = {
  height: '16vw',
  boxShadow: "rgb(22, 27, 27) 2px 4px 10px",
  borderRadius: '2%',
  cursor: 'pointer'
}

// console.log('This is booksData : \n');
// console.log(booksData);
const booksNew = booksData;


const TopBooks = () => {
  return (
    <div className="container" style={{ maxWidth: "90%" }}>
      <div className='top-books-container pt-4'>

        <div className='ml-5 mb-3' >
          <h3> Top Books </h3>
          <hr className='animate__animated animate__headShake animate__infinite' style={{ border: '2px solid black', width: '10vw', }} />
        </div>

        <div className='row pt-5 '>
          {booksNew?.map((book, index) => (
            <div
              key={index}
              className='col-md-4 p-2 cabo_s'

            >
              <div className='book-card' 
              style={{ display: 'flex', justifyContent: 'center'  }}>
                <img src={book.img}
                  onClick={() => window.open(book.BookPageLink)}
                  className='img-responsive'
                  alt="book" style={bookStyleTopBooks}
                />
                <div
                 style={{ textAlign: 'left', padding: '1vw'}}
                  className={styles.TopBooksContentASR}
                >
                  <h5>{book.title}</h5>
                  <p>{book.Description.substr(0, 100)} .......</p>
                  <a href={book.BookPageLink} target='__blank'> Read More </a>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </div>
  )
}

export default TopBooks
