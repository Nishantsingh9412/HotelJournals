import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react';
import { FaBars, FaBriefcase, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaHome, FaPlusSquare } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import styles from './RecruiterSidebarFinal.module.css'

const activeLink = () => {
  return {
    color: '#13395e',
    fontWeight: 'bold',
    backgroundColor: '#b6c8d9',
  };
};

const RecruiterSidebarFinal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const routes = [
    {
      path: "/test/recruiter",
      name: "Dashboard",
      icon: <FaHome size={'22px'} />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUser size={'22px'} />,
    },
    {
      path: "/test/recruiter/manageJobs",
      name: "All Jobs",
      icon: <FaBriefcase size={'22px'} />,
    },
    {
      path: "/jobs/recruiter/post",
      name: "Add Jobs",
      icon: <FaPlusSquare size={'22px'} />,
    },
  ];
  return (
    // <Box position="sticky" top="0" maxHeight="calc(100vh - 64px)" overflowY="auto" pr="4">
    //   <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
    //     <DrawerOverlay />
    //     <DrawerContent>
    //       <DrawerHeader borderBottomWidth='1px' display={'flex'} justifyContent={'space-between'}>
    //         Basic Drawer
    //         <IoMdClose
    //           style={{ cursor: 'pointer' }}
    //           onClick={onClose}
    //         />
    //       </DrawerHeader>
    //       <DrawerBody>
    //         <div>
    //           {routes.map((route, index) => (
    //             <NavLink
    //               style={{ textDecoration: 'none' }}
    //               key={index}
    //               to={route.path}
    //               activeStyle={activeLink()}
    //             >
    //               <div className='d-flex mt-3'>
    //                 {route.icon}
    //                 <span style={{ marginLeft: '10px', fontSize: '1rem' }}>{route.name}</span>
    //               </div>
    //             </NavLink>
    //           ))}
    //         </div>
    //       </DrawerBody>
    //     </DrawerContent>
    //   </Drawer>
    //   <Button onClick={onOpen}>
    //     <FaBars />
    //   </Button>
    // </Box>
    <div className={styles.sidebarRec}>
      {/* <div style={{ borderBottom: '1px solid', display: 'flex', justifyContent: 'space-between' }}>
        Basic Drawer
        <span style={{ cursor: 'pointer' }} onClick={onClose}>
          <IoMdClose />
        </span>
      </div> */}
      <div>
        <div className='p-2'>
          {routes.map((route, index) => (
            <NavLink
              style={{ textDecoration: 'none', color: 'white'}}
              key={index}
              to={route.path}
              activeStyle={activeLink()}
            >
              <div className='d-flex mt-3'>
                <div className={styles.iconRec} >{route.icon}</div>
                <span className={styles.textRec} style={{ marginLeft: '10px', fontSize: '1rem' }}>{route.name}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruiterSidebarFinal;
