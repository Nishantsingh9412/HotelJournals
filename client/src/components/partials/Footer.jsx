import React from 'react'

const Footer = () => {
  return (
    <>
    {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div className="container-fluid my-3 m-0" >
  {/* <!-- Footer --> */}
  <footer className="text-center text-dark" style={{background:'#e4b49d'}}>
    {/* <!-- Grid container --> */}
    <div className="container">
      {/* <!-- Section: Links --> */}
      <section className="mt-5">
        {/* <!-- Grid row--> */}
        <div className="row text-center d-flex justify-content-center pt-5">
          {/* <!-- Grid column --> */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-dark">About us</a>
            </h6>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-dark">Products</a>
            </h6>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-dark">Awards</a>
            </h6>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-dark">Help</a>
            </h6>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-dark">Contact</a>
            </h6>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row--> */}
      </section>
      {/* <!-- Section: Links --> */}

      <hr className="my-5" />

      {/* <!-- Section: Text --> */}
      <section className="mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Section: Text --> */}

      {/* <!-- Section: Social --> */}
      <section className="text-center mb-5">
        <a href="" className="text-dark m-4">
          <i className="fab fa-facebook-f fa-2x" ></i>
        </a>
        <a href="" className="text-dark m-4">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="" className="text-dark m-4">
          <i className="fab fa-google fa-2x"></i>
        </a>
        <a href="" className="text-dark m-4">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="" className="text-dark m-4">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="" className="text-dark m-4">
          <i className="fab fa-github fa-2x"></i>
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
