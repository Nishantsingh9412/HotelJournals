import React from 'react'
import { NavLink } from 'react-router-dom'

// import './Navbar.css'
import NavCSS from './Navbar.module.css'
import logo from '../../assets/img/logo.png'
const Navbar = () => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light ${NavCSS.navbar_all_components}`}  >
                <a className="navbar-brand" href="#"> <img src={logo} height={54} width={72} alt="" />  </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/' className={NavCSS.header_nav_links} >
                                    Home
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/jobs' className={NavCSS.header_nav_links} >
                                    Jobs
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/courses' className={NavCSS.header_nav_links} >
                                    Courses
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/journals' className={NavCSS.header_nav_links} >
                                    Journals
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/about' className={NavCSS.header_nav_links} >
                                    About me 
                                </NavLink>
                            </div>
                        </li>

                        <li className="nav-item active">
                            <div className='nav-link' >
                                <NavLink to='/tips' className={NavCSS.header_nav_links} >
                                    Tips
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <button className='btn btn-dark '> */}
                            <div className='nav-link' >
                                <NavLink to='/login' className={NavCSS.header_nav_links} >
                                    Login
                                </NavLink>
                            </div>  

                            <div className='nav-link' >
                                <NavLink to='/signUp' className={NavCSS.header_nav_links} >
                                    SignUp
                                </NavLink>
                            </div>  

            </nav>
        </div>
    )
}

export default Navbar
