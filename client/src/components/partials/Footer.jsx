import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div class="container-fluid mt-4 p-0 m-0" >
        {/* <!-- Footer --> */}
        <footer class="text-center text-dark" style={{ background: '#e4b49d' }}>
          {/* <!-- Grid container --> */}
          <div class="container">
            {/* <!-- Section: Links --> */}
            <section class="mt-5">
              {/* <!-- Grid row--> */}
              <div class="row text-center d-flex justify-content-center pt-5">
                {/* <!-- Grid column --> */}
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-dark">
                      {/* About us */}
                      Sobre mi
                    </a>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-dark">
                      {/* Products */}
                      Agendas
                    </a>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                {/* <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-dark">Awards</a>
                  </h6>
                </div> */}
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                {/* <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-dark">Help</a>
                  </h6>
                </div> */}
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-dark">
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

            <hr class="my-5" />

            {/* <!-- Section: Text --> */}
            <section class="mb-5">
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
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
            <section class="text-center mb-5">
              <a href="https://www.instagram.com/hoteljournals/" class="text-dark m-4">
                <i class="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://www.tiktok.com/@hoteljournals" class="text-dark m-4">
                <i class="fab fa-tiktok fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/company/hotel-journals" class="text-dark m-4">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://www.youtube.com/@Hoteljournals" class="text-dark m-4">
                <i class="fab fa-youtube fa-2x"></i>
              </a>
              <a href="https://www.facebook.com/HotelJournals" class="text-dark m-4">
                <i class="fab fa-facebook-f fa-2x" ></i>
              </a>
              <a href="https://twitter.com/Hoteljournals" class="text-dark m-4">
                <i class="fab fa-twitter fa-2x"></i>
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
