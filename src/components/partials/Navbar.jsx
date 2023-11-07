import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'
import logo from '../../assets/img/logo.png'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light " style={{ background: '#FAF1EA' }}>
                <a className="navbar-brand" href="#"> <img src={logo} height={54} width={72} alt="" />  </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/' className='header-nav-links'>
                                    Home
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/jobs' className='header-nav-links'>
                                    Jobs
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/courses' className='header-nav-links'>
                                    Courses
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/journals' className='header-nav-links'>
                                    Journals
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/about' className='header-nav-links'>
                                    About me 
                                </NavLink>
                            </div>
                        </li>

                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/tips' className='header-nav-links'>
                                    Tips
                                </NavLink>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
