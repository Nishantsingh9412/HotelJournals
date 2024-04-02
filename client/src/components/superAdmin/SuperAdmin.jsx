import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';

// Icons start
import { MdDashboard, MdLocalMall, MdStackedLineChart } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaBriefcase,FaRegMoon } from "react-icons/fa";
import { HiOutlineMenu, HiPencilAlt } from "react-icons/hi";
import { FaGraduationCap, FaPlus, FaUser } from "react-icons/fa6";
import { IoAnalyticsOutline, IoBarChart } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
// Icons End

import logoImg from '../../assets/img/logo.png'
import { setCurrentUser } from '../../redux/actions/CurrentUser'
import styles from './SuperAdmin.module.css'

const SuperAdmin = () => {

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
            <aside
                // className={styles.asideComponentDash}
                className={`${styles.asideComponentDash} ${isMenuOpen ? styles.show : ''}`}
            >
                <div className={`${styles.top} ${styles.logo}`} >
                    <img className={styles.imageClass} src={logoImg} alt="logo" />
                    <h2 className={` ${styles.heading2}  ${styles.textMuted}`}>Hotel
                        <span style={{
                            color: '#e4b49d',
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
                    {/* <a className={styles.anchorTag} href="#">
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
                    </a> */}

                </div>
            </aside>
            {/* End of aside   */}

            {/* Start of main section */}
            <main className={styles.mainComp}>
                <h1 className={styles.heading1}>Dashboard</h1>
                <div className={styles.date}>
                    <input type='date' />
                </div>
                <div className={styles.insights}>
                    {/* // Start of sales */}
                    <div className={styles.sales}>
                        <span>
                            <MdAnalytics
                                size={25}
                            />
                        </span>
                        <div className={styles.middle}>
                            <div className={styles.left}>
                                <h3 className={styles.heading3}>Total Sales</h3>
                                <h1 className={styles.heading1} >$25,024</h1>
                            </div>
                            <div className={styles.progress}>
                                <svg className={styles.svgcircleIcon}>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className={styles.number}>
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small className={styles.textMuted}>
                            Last 24 Hours
                        </small>
                    </div>
                    {/* // End of Sales */}

                    {/* // Start of Expenses */}
                    <div className={styles.expenses}>
                        <span>
                            <IoAnalyticsOutline
                                size={25}
                            />
                        </span>
                        <div className={styles.middle}>
                            <div className={styles.left}>
                                <h3 className={styles.heading3}>Total Expenses</h3>
                                <h1 className={styles.heading1} >$25,024</h1>
                            </div>
                            <div className={styles.progress}>
                                <svg className={styles.svgcircleIcon}>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className={styles.number}>
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small className={styles.textMuted}>
                            Last 24 Hours
                        </small>
                    </div>
                    {/* // End of Expenses */}

                    {/* // Start of Income */}
                    <div className={styles.income}>
                        <span>
                            <MdStackedLineChart
                                size={25}
                            />
                        </span>
                        <div className={styles.middle}>
                            <div className={styles.left}>
                                <h3 className={styles.heading3}>Total Income</h3>
                                <h1 className={styles.heading1}>$41,120</h1>
                            </div>
                            <div className={styles.progress}>
                                <svg className={styles.svgcircleIcon}>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className={styles.number}>
                                    <p>44%</p>
                                </div>
                            </div>
                        </div>
                        <small className={styles.textMuted}>
                            Last 24 Hours
                        </small>
                    </div>
                    {/* // End of Income */}
                </div>
                {/* // End of insights */}
                <div className={styles.recentOrder}>
                    <h2 className={styles.heading2}> Recent Orders </h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Product name </th>
                                <th>prid nu</th>
                                <th>Payment</th>
                                <th>status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Foldable Mini Drone</td>
                                <td>10245</td>
                                <td>Hippi</td>
                                <td className={styles.warning}>Pending</td>
                                <td className={styles.primary}> Details </td>
                            </tr>
                            <tr>
                                <td>Foldable Mini Drone</td>
                                <td>10245</td>
                                <td>Hippi</td>
                                <td className={styles.warning}>Pending</td>
                                <td className={styles.primary}> Details </td>
                            </tr>
                            <tr>
                                <td>Foldable Mini Drone</td>
                                <td>10245</td>
                                <td>Hippi</td>
                                <td className={styles.warning}>Pending</td>
                                <td className={styles.primary}> Details </td>
                            </tr>
                            <tr>
                                <td>Foldable Mini Drone</td>
                                <td>10245</td>
                                <td>Hippi</td>
                                <td className={styles.warning}>Pending</td>
                                <td className={styles.primary}> Details </td>
                            </tr>
                            <tr>
                                <td>Foldable Mini Drone</td>
                                <td>10245</td>
                                <td>Hippi</td>
                                <td className={styles.warning}>Pending</td>
                                <td className={styles.primary}> Details </td>
                            </tr>
                        </tbody>
                    </table>
                    <a className={styles.anchorTag} href="#"> Show All</a>
                </div>
            </main>
            {/* // End of main section  */}


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
                <div className={styles.recentUpdates}>
                    <h2 className={styles.heading2}> Recent Updates </h2>
                    <div className={styles.updates}>
                        <div className={styles.update}>
                            <div className={styles.profilePhoto}>
                                <img src={'https://via.placeholder.com/150'} alt="profile-photo" />
                            </div>
                            <div className={styles.message}>
                                <p><b>Mike Tyson</b> Received his order of a book named Story of TATA</p>
                                <small className={styles.textMuted}>
                                    2 hours ago
                                </small>
                            </div>
                        </div>

                        <div className={styles.update}>
                            <div className={styles.profilePhoto}>
                                <img src={'https://via.placeholder.com/150'} alt="profile-photo" />
                            </div>
                            <div className={styles.message}>
                                <p><b>Mike Tyson</b> Received his order of a book named Story of TATA</p>
                                <small className={styles.textMuted}>
                                    2 hours ago
                                </small>
                            </div>
                        </div>

                        <div className={styles.update}>
                            <div className={styles.profilePhoto}>
                                <img src={'https://via.placeholder.com/150'} alt="profile-photo" />
                            </div>
                            <div className={styles.message}>
                                <p><b>Mike Tyson</b> Received his order of a book named Story of TATA</p>
                                <small className={styles.textMuted}>
                                    2 hours ago
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.salesAnalytics}>
                    <h2 className={styles.heading2}>  Sales Analytics  </h2>
                    <div className={`${styles.item} ${styles.online}`}>
                        <div className={styles.icon}>
                            <span>
                                <CiShoppingCart />
                            </span>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <h3 className={styles.heading3}>Online Orders</h3>
                                <small className='text-muted'>Last 24 hours</small>
                            </div>
                            <h5 className={`${styles.heading5}  ${styles.success}`}> + 25% </h5>
                            <h3 className={styles.heading3}>3849</h3>
                        </div>
                    </div>

                    <div className={`${styles.item} ${styles.offline}`}>
                        <div className={styles.icon}>
                            <span>
                                <MdLocalMall />
                            </span>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <h3 className={styles.heading3}>Offline Orders</h3>
                                <small className='text-muted'>Last 24 hours</small>
                            </div>
                            <h5 className={`${styles.heading5} ${styles.danger}`}> -17% </h5>
                            <h3 className={styles.heading3}>1100</h3>
                        </div>
                    </div>

                    <div className={`${styles.item} ${styles.customers}`}>
                        <div className={styles.icon}>
                            <span>
                                <FaUser />
                            </span>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <h3 className={styles.heading3}>new customers</h3>
                                <small className='text-muted'>Last 24 hours</small>
                            </div>
                            <h5 className={`${styles.heading5} ${styles.danger}`}> +30% </h5>
                            <h3 className={styles.heading3}>849</h3>
                        </div>
                    </div>

                    <div className={`${styles.item} ${styles.addProduct}`}>
                        <div>
                            <span>
                                <FaPlus />
                            </span>
                            <h3 className={styles.heading3}> Add Product </h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperAdmin
