import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className="container-fluid mt-4 p-4 rounded" >
        {/* <!-- Footer --> */}
        <footer className="text-center text-dark rounded" style={{ background: '#e4b49d' }}>
          {/* <!-- Grid container --> */}
          <div className="container">
            {/* <!-- Section: Links --> */}
            <section className="mt-5">
              {/* <!-- Grid row--> */}
              <div className="row text-center d-flex justify-content-center pt-5">
                {/* <!-- Grid column --> */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-dark">
                      {/* About us */}
                      Sobre mi
                    </a>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-dark">
                      {/* Products */}
                      Agendas
                    </a>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                {/* <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-dark">Awards</a>
                  </h6>
                </div> */}
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                {/* <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-dark">Help</a>
                  </h6>
                </div> */}
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-dark">
                      {/* Contact */}
                      Contacto
                    </a>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}

            <hr className="my-5" />


            {/* New Section for Address */}
            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h6 className="text-uppercase font-weight-bold">Dirección</h6>
                  <p>
                    Address
                  </p>
                </div>
              </div>
            </section>
            {/* End New Section for Address */}


            {/* <!-- Section: Text --> */}
            <section >
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    Hotel Journals aboga por la buena práctica en el sector hotelero y turístico,
                    dando así facilidad a la hora de acceder a cursos y ofertas de empleo
                    relacionadas con el sector.
                  </p>
                </div>
              </div>
            </section>
            {/* <!-- Section: Text --> */}

            {/* <!-- Section: Social --> */}
            <section className="text-center mb-5">
              <a href="https://www.instagram.com/hoteljournals/" className="text-dark m-4">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://www.tiktok.com/@hoteljournals" className="text-dark m-4">
                <i className="fab fa-tiktok fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/company/hotel-journals" className="text-dark m-4">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://www.youtube.com/@Hoteljournals" className="text-dark m-4">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
              <a href="https://www.facebook.com/HotelJournals" className="text-dark m-4">
                <i className="fab fa-facebook-f fa-2x" ></i>
              </a>
              <a href="https://twitter.com/Hoteljournals" className="text-dark m-4">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </section>
            {/* <!-- Section: Social --> */}
          </div>
          {/* <!-- Grid container --> */}
          <br />

        </footer>
        {/* <!-- Footer --> */}
      </div>
      {/* <!-- End of .container --> */}
    </>
  )
}

export default Footer

