import React, { useEffect, useState } from 'react'
import decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// Icons Start
import { MdDashboard, MdLocalMall, MdStackedLineChart } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { HiOutlineMenu, HiPencilAlt } from "react-icons/hi";
import { FaBriefcase, FaCheck, FaGear, FaGraduationCap, FaInfo, FaMessage, FaNoteSticky, FaPlus, } from "react-icons/fa6";
import { IoAnalyticsOutline } from "react-icons/io5";
// Icons End

import logoImg from '../../../assets/img/logo.png'
import styles from '../AddTipSuperAdmin.module.css'
import CreateJobForm from './CreateJobForm';
import { setCurrentUser } from '../../../redux/actions/CurrentUser';
import { RiLogoutBoxLine } from 'react-icons/ri';



const CreateJobsSA = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('menu clicked');
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
        console.log('menu closed');
    };

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle(styles.darkThemeVariables);
        console.log('theme toggled');
    }



    const User = useSelector((state) => (state.currentuserReducer));
    console.log(User);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login/superadmin')
        dispatch(setCurrentUser(null));
    }
    useEffect(() => {
        const token = User?.token;
        if (token) {
            const decodeToken = decode(token);
            if (decodeToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [dispatch])



    return (
        <div className={styles.dashContainer}>
            <aside className={`${styles.asideComponentDash} ${isMenuOpen ? styles.show : ''}`}>
                <div className={`${styles.top} ${styles.logo}`} >
                    <img className={styles.imageClass} src={logoImg} alt="logo" />
                    <h2 className={` ${styles.heading2}  ${styles.textMuted}`}>Hotel
                        <span style={{
                            color: '#e4b49d',
                            marginLeft: '2px'
                        }}>Journals</span>
                    </h2>
                    <div
                        className={styles.close}
                        id='close-btn'
                        onClick={handleMenuClose}
                    >
                        {/* <div id="close-btn"></div> */}
                        <MdCancel size={25} />
                    </div>
                </div>

                <div className={styles.sidebar}>
                    <a className={styles.anchorTag} href="/superadmin">
                        <MdDashboard />
                        <h3 className={styles.heading3}> Dashboard </h3>
                    </a>
                    <a className={styles.anchorTag} href="/superadmin/tips" >
                        <HiPencilAlt />
                        <h3 className={styles.heading3}> Tips </h3>
                    </a>
                    <a className={styles.anchorTag} href="/superadmin/courses">
                        <FaGraduationCap />
                        <h3 className={styles.heading3}> Courses </h3>
                    </a>
                    <a className={styles.anchorTag} href="/superadmin/jobs">
                        <FaBriefcase />
                        <h3 className={styles.heading3}> Jobs </h3>
                    </a>

                    <a className={styles.anchorTag} style={{cursor:'pointer'}} onClick={handleLogout}>
                        <RiLogoutBoxLine />
                        <h3 className={styles.heading3}> Logout </h3>
                    </a>
                </div>
            </aside>
            {/* End of aside   */}
            <main className={styles.mainComp}>
                <h2 className='text-center'>Post A Jobs</h2>
                <CreateJobForm />
            </main>
            {/* End of main section  */}
            <div className={styles.right}>
                <div className={styles.top}>
                    <button
                        id='menu-btn'
                        className={styles.menuBtn}
                        onClick={handleMenuClick}
                    >
                        <span><HiOutlineMenu /></span>
                    </button>
                    <div
                        className={styles.themeToggler}
                        onClick={handleThemeToggle}
                    >
                        <span className={isDarkMode ? styles.active : ''}> <IoIosSunny /> </span>
                        <span className={isDarkMode ? '' : styles.active}> <FaRegMoon /> </span>
                    </div>
                    <div className={styles.profile}>
                        <div className={styles.info}>
                            <p>Hey , <b>Suraj</b> </p>
                            <small className={styles.textMuted}>Admin</small>
                        </div>
                        <div className={styles.profilePhoto}>
                            <img src={'https://via.placeholder.com/50'} alt="profile-pic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateJobsSA
