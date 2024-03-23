import { NavLink } from "react-router-dom";
import { FaBars, FaBriefcase, FaHome, FaLock, FaMoneyBill, FaPlusSquare, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from './SideBar.module.css';
import SidebarMenu from "./SidebarMenu";


const routes = [
  {
    path: "/test/recruiter",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/test/recruiter/manageJobs",
    name: "All Jobs",
    icon: <FaBriefcase />,
  },
  {
    path: "/jobs/recruiter/post",
    name: "Add Jobs",
    icon: <FaPlusSquare />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={styles.sidebar}
        >
          <div className={styles.topSection}>
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className={styles.logo}
                >
                </motion.h1>
              )}
            </AnimatePresence>

            <div className={styles.bars}>
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className={styles.search}>
            <div className={styles.search_icon}>
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className={styles.routes}>
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  to={route.path}
                  key={index}
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  <div className={styles.icon}>{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={styles.link_text}
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
