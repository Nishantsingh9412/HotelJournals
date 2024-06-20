import React from 'react'

import styles from './TopBooks.module.css'
import booksData from './booksData'
import './Books.css'



const FeaturedBooks = () => {

    const bookStyleTopBooks = {
        height: '16vw',
        boxShadow: "rgb(22, 27, 27) 2px 4px 10px",
        borderRadius: '2%',
        cursor: 'pointer'
    }

    const booksNew = booksData.filter((book) => book.featured === true);
    console.log(booksNew);

    return (
        <div className='container' style={{ maxWidth: "90%" }}>
            <div className='pt-4 ml-5 featured-books-container'>
                <h3>
                    {/* Top Books */}
                    Más vendidas
                </h3>
                <hr className='' style={{ border: '2px solid black', width: '10vw', }} />
                <span className='p-0 m-0'>
                    {/* Handpicks need just for you   */}
                    Agendas personalizadas para tu puesto de trabajo
                </span>


                {/* main row for featured books */}
                <div className='row main-row-featured-books pt-3 flex-wrap-reverse justify-content-center'>
                    {/* small Books */}
                    <div className='col-md-8 col-sm-12'>
                        <div className='row pt-2'>
                            {booksNew?.map((book, index) => (
                                <div
                                    key={index}
                                    className='col-md-6 p-2 cabo_s'

                                >
                                    <div className='book-card'
                                        style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={book.img}
                                            onClick={() => window.open(book.BookPageLink)}
                                            className='img-responsive'
                                            alt="book" style={bookStyleTopBooks}
                                        />
                                        <div
                                            style={{ textAlign: 'left', padding: '1vw' }}
                                            className={styles.TopBooksContentASR}
                                        >
                                            <h5>{book.title}</h5>
                                            <p>{book.Description.substr(0, 100)} .......</p>
                                            <a href={book.BookPageLink} target='__blank'>
                                                {/* Read More */}
                                                Leer más 
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* column for large book */}
                    <div className='col-md-3 col-sm-12 large-book-col '>
                        <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: 'wrap' }}>

                            {/* large book image */}
                            <img
                                src={'https://res.cloudinary.com/dwahql1jy/image/upload/v1713515207/journals/j6_gtzdgv.jpg'}
                                className='img-responsive large-book-image'
                                alt="book1"
                                style={{
                                    boxShadow: "rgb(22, 27, 27) 2px 4px 10px",
                                    borderRadius: '2%',
                                }}
                            />
                            <div className='pt-4'>
                                <h5>Front Office: Diario de aprendizaje</h5>
                                <p>¿Eres nueva/o en Recepción?\n\n¿Quién no ha tenido el problema de empezar
                                    un nuevo puesto, ....
                                    {/*
                                    apuntarlo todo en hojas sueltas o libreta y luego no encontrar
                                    los apuntes? Este journal te ayudará a tenerlo todo a mano, separado por turnos,
                                    con espacio para añadir el “Check list” de tu trabajo, incluye espacios para las
                                    tareas más importantes de cada turno y espacio libre para lo que consideres 
                                    necesario 🥰\n\nSu separación por turnos
                                    hará que sea más fácil volver a repasar tus apuntes cuando algo surja y no sepas
                                    cómo actuar 😇. */}
                                </p>
                                <a href={'https://amzn.eu/d/0t690Wb'} target='__blank'> Read More </a>
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
