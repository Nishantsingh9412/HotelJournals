import React, { useEffect, useState } from 'react'
import { MdDashboard, MdLocalMall, MdStackedLineChart } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaPencilAlt, FaPencilRuler, FaRegMoon } from "react-icons/fa";
import { HiOutlineMenu, HiPencilAlt } from "react-icons/hi";
import { FaCheck, FaGear, FaInfo, FaMessage, FaNoteSticky, FaPlus, FaUser } from "react-icons/fa6";
import { IoAnalyticsOutline, IoBarChart } from "react-icons/io5";

import logoImg from '../../../assets/img/logo.png'
import styles from '../AddTipSuperAdmin.module.css'
import CourseDashboard from './CourseDashboard';
import AddCourseForm from './AddCourseForm';
import EditCourseForm from './EditCourseForm';


const EditCourse = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

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

    return (
        <div className={styles.dashContainer}>
            <aside
                // className={styles.asideComponentDash}
                className={`${styles.asideComponentDash} ${isMenuOpen ? styles.show : ''}`}
            >
                <div className={`${styles.top} ${styles.logo}`} >
                    <img className={styles.imageClass} src={logoImg} alt="logo" />
                    <h2 className={` ${styles.heading2}  ${styles.textMuted}`}>Hotel
                        <span style={{
                            color:'#e4b49d',
                            marginLeft: '2px'
                        }}>Journals</span>
                    </h2>
                </div>
                <div
                    className={styles.close}
                    id='close-btn'
                    onClick={handleMenuClose}
                >
                    {/* <div id="close-btn"></div> */}
                    <MdCancel size={25} />
                </div>
                <div className={styles.sidebar}>
                    <a className={styles.anchorTag} href="#">
                        <MdDashboard />
                        <h3 className={styles.heading3}> Dashboard </h3>
                    </a>
                    <a className={styles.anchorTag} href="/superadmin/tips" >
                        <HiPencilAlt />
                        <h3 className={styles.heading3}> Tips </h3>
                    </a>
                    <a className={styles.anchorTag} href="/superadmin/courses"> 
                        <FaNoteSticky />
                        <h3 className={styles.heading3}> Courses </h3>
                    </a>
                    <a className={styles.anchorTag} href="#">
                        <IoAnalyticsOutline />
                        <h3 className={styles.heading3}> Analytics </h3>
                    </a>
                    <a className={styles.anchorTag} href="#">
                        <FaMessage />
                        <h3 className={styles.heading3}> Messages </h3>
                        <span className={styles.messages}> 26 </span>
                    </a>
                    <a className={styles.anchorTag} href="#">
                        <FaCheck />
                        <h3 className={styles.heading3}> Products </h3>
                    </a>
                    <a className={styles.anchorTag} href="#">
                        <FaInfo />
                        <h3 className={styles.heading3}> Reports </h3>
                    </a>

                    <a className={styles.anchorTag} href="#">
                        <FaGear />
                        <h3 className={styles.heading3}> Settings </h3>
                    </a>
                    <a className={styles.anchorTag} href="#">
                        <FaPlus />
                        <h3 className={styles.heading3}> Add Product </h3>
                    </a>

                </div>
            </aside>
            {/* End of aside   */}
            <main className={styles.mainComp}>
                <h2 className='text-center mb-4'> Update Course </h2>
                <EditCourseForm />
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

export default EditCourse
