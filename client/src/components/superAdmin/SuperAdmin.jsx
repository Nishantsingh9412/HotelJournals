import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Image } from '@chakra-ui/react'
import decode from 'jwt-decode';
import { formatDistanceToNow } from 'date-fns';

// Icons start
import { MdDashboard, MdLocalMall } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaBriefcase, FaEdit, FaRegMoon } from "react-icons/fa";
import { HiOutlineMenu, HiPencilAlt } from "react-icons/hi";
import { FaEye, FaGraduationCap, FaPlus, FaUser } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";
// Icons End

import logoImg from '../../assets/img/logo.png'
import { setCurrentUser } from '../../redux/actions/CurrentUser'
import styles from './SuperAdmin.module.css'
import CircleChart from './charts/CircleChart';
import {
    countSuperAdminCourses,
    countSuperAdminJobs,
    countSuperAdminTips,
    recentUnverifiedJobs,
    recentCourses
} from '../../api';


const SuperAdmin = () => {

    const [totalJobs, setTotalJobs] = useState(0);
    const [totalCourses, setTotalCourses] = useState(0);
    const [totalTips, setTotalTips] = useState(0);
    const [allUnverifiedJobs, setAllUnverifiedJobs] = useState([{}]);
    const [allCoursesRecent, setAllCoursesRecent] = useState([{}])

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

    const AllFiveCourses = async () => {
        const { data } = await recentCourses();
        console.log(data);
        setAllCoursesRecent(data.result);
    }

    const recentUnvJobs = async () => {
        const { data } = await recentUnverifiedJobs();
        console.log(data);
        setAllUnverifiedJobs(data.result);
    }

    console.log(allUnverifiedJobs);

    const SuperAdminJobsCount = async () => {
        const { data } = await countSuperAdminJobs();
        console.log(data);
        setTotalJobs(data.result);
    }

    const SuperAdminCoursesCount = async () => {
        const { data } = await countSuperAdminCourses();
        console.log(data);
        setTotalCourses(data.result);

    }

    const SuperAdminTipsCount = async () => {
        const { data } = await countSuperAdminTips();
        console.log(data);
        setTotalTips(data.result);
    }

    useEffect(() => {
        AllFiveCourses();
        recentUnvJobs();
        SuperAdminCoursesCount();
        SuperAdminTipsCount();
        SuperAdminJobsCount();
    }, [])



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

                    <a className={styles.anchorTag} style={{ cursor: 'pointer' }} onClick={handleLogout}>
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
                {/* <div className={styles.date}>
                    <input type='date' />
                </div> */}
                <div className={styles.insights}>
                    {/* // Start of sales */}
                    <div className={styles.sales}>
                        <span>
                            <FaBriefcase
                                size={25}
                            />
                        </span>
                        <div className={styles.middle}>
                            {/* <div className={styles.left}> */}
                            <h3 className={styles.heading3}>Total Jobs</h3>
                            <h1 className={styles.heading1}>{totalJobs}</h1>
                            {/* </div> */}
                            {/* <div className={styles.progress}>
                                <svg className={styles.svgcircleIcon}>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className={styles.number}>
                                    <p>81%</p>
                                </div>
                            </div> */}
                            {/* <CircleChart size={90} percentage={50} strokeWidth={15} strokeColor="#7380EC" /> */}

                        </div>
                        {/* <small className={styles.textMuted}>
                            Last 24 Hours
                        </small> */}
                        <small className={styles.textMuted}>
                            Posted Until Now
                        </small>
                    </div>
                    {/* // End of Sales */}

                    {/* // Start of Expenses */}
                    <div className={styles.expenses}>
                        <span>
                            <FaGraduationCap
                                size={25}
                            />
                        </span>
                        <div className={styles.middle}>
                            {/* <div className={styles.left}> */}
                            <h3 className={styles.heading3}>Total Courses</h3>
                            <h1 className={styles.heading1} > {totalCourses} </h1>
                            {/* </div> */}
                            {/* <div className={styles.progress}>
                                <svg className={styles.svgcircleIcon}>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className={styles.number}>
                                    <p>40%</p>
                                </div>
                            </div> */}
                            {/* <CircleChart size={90} percentage={60} strokeWidth={15} strokeColor="#7380EC" /> */}
                        </div>
                        <small className={styles.textMuted}>
                            Posted Until Now
                        </small>
                    </div>
                    {/* // End of Expenses */}

                    {/* // Start of Income */}
                    <div className={styles.income}>
                        <span>
                            <FaEdit
                                size={25}
                            />
                        </span>
                        <div className={styles.middle}>
                            {/* <div className={styles.left}> */}
                            <h3 className={styles.heading3}>Total Tips</h3>
                            <h1 className={styles.heading1}> {totalTips} </h1>
                            {/* </div> */}
                            {/* <div className={styles.progress}>
                                <svg className={styles.svgcircleIcon}>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className={styles.number}>
                                    <p>44%</p>
                                </div>
                            </div> */}
                            {/* <div >
                                <CircleChart size={90} percentage={40} strokeWidth={15} strokeColor="#7380EC" />
                            </div> */}
                        </div>
                        <small className={styles.textMuted}>
                            Posted Until Now
                        </small>
                    </div>
                    {/* // End of Income */}
                </div>
                {/* // End of insights */}
                <div className={styles.recentOrder}>
                    <h2 className={styles.heading2}> Recent Unverified Jobs </h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Job Title </th>
                                <th>Company Name</th>
                                <th>JobType</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUnverifiedJobs?.map((job, index) => {
                                    return (
                                        <tr key={index}>
                                            <td >
                                                <Image
                                                    marginLeft={50}
                                                    borderRadius='full'
                                                    boxSize='30px'
                                                    // src='https://bit.ly/dan-abramov'
                                                    src={job?.recruiter_info?.company_logo}
                                                    alt='Dan Abramov'
                                                />
                                            </td>
                                            <td>{job?.jobTitle}</td>
                                            <td>{job?.recruiter_info?.companyName}</td>
                                            <td>{job?.jobType}</td>
                                            {/* <td className={styles.warning}>Pending</td> */}
                                            {/* <td className={styles.primary}> Details </td> */}
                                        </tr>
                                    )
                                })
                            }
                            {/* <tr>
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
                            </tr> */}
                        </tbody>
                    </table>
                    <a className={styles.anchorTag} href="/superadmin/jobs" target='__blank'> Show All</a>
                </div>
            </main >
            {/* // End of main section  */}


            <div div className={styles.right} >
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
                {/* <div className={styles.recentUpdates}>
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
                </div> */}
                <div className={styles.salesAnalytics}>
                    <h2 className={styles.heading2}>  Recent Courses </h2>
                    {allCoursesRecent.map((course, index) => {
                        return (
                            <div className={`${styles.item} ${styles.online}`}>
                                <Image
                                    // marginLeft={50}
                                    borderRadius='full'
                                    boxSize='50px'
                                    // src='https://bit.ly/dan-abramov'
                                    src={course?.banner_image && course?.banner_image}
                                    alt='Dan Abramov'
                                />
                                <div className={styles.right}>
                                    <div className={styles.info}>
                                        <h3 className={styles.heading3}>
                                            {course?.title &&
                                                course?.title?.length > 15 ?
                                                course?.title?.substr(0, 15) + '.....' :
                                                course?.title
                                            }
                                        </h3>
                                        <small className='text-muted'>
                                            {course?.createdAt &&
                                                `${formatDistanceToNow(course?.createdAt)} ago`}
                                        </small>
                                    </div>
                                    {/* <h5 className={`${styles.heading5}  ${styles.success}`}> + 25% </h5> */}
                                    <h4 className={`${styles.heading5}  ${styles.primary}`}> {course?.difficulty} </h4>
                                    {/* <h3 className={styles.heading3}>3849</h3> */}
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className={`${styles.item} ${styles.offline}`}>
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
                    </div> */}

                    {/* <div className={`${styles.item} ${styles.customers}`}>
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
                    </div> */}

                    <a href="/superadmin/courses/" target='__blank'>
                        <div className={`${styles.item} ${styles.addProduct}`}>
                            <div>
                                <span>
                                    <FaEye />
                                </span>
                                <h3 className={styles.heading3}> View All </h3>

                            </div>
                        </div>
                    </a>
                </div>
            </div >
        </div >
    )
}

export default SuperAdmin
