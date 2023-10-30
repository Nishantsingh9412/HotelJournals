import React from 'react'

import logo from '../assets/img/logo.png'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light " style={{background:'#FAF1EA'}}>
                <a className="navbar-brand" href="#"> <img src={logo} height={54} width={72} alt="" />  </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> Jobs </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> Courses </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> Journals </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> About Us </a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="#"> Tips </a>
                        </li>
                    </ul>
                   
                </div>
            </nav>
        </div>
    )
}

export default Navbar
