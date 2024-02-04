import React from 'react'
import CSS from './SearchBar.module.css';
import 'animate.css';

import { FaBars, FaTimes, FaAngleLeft } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import CheckBox from "./CheckBox";
import { FaAngleRight } from 'react-icons/fa6';

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const btnRef = React.useRef();
  return (<>
    <div>
      <div>
        <IconButton
          ref={btnRef}
          style={{
            backgroundColor: 'white',
            color: '#C36C68',
            borderRadius: '0px 10px 10px 0px',
            border: '3px solid #E4B49D',
            marginTop: '2rem',
            padding: 'auto',
            marginBottom: '0.4rem',
          }}
          onClick={onOpen}
          icon={
            <>
              <span
                style={{
                  marginLeft: '0.5rem',
                  fontWeight: '600',
                  paddingRight: '1.5rem',
                }}
              >
                Add More Filter
              </span>
              <FaAngleRight size={18} />
            </>
          }
          className={`${CSS.menuButton} animate__animated animate__shakeX animate__delay-1s`}
        />

      </div>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>FILTER BY</DrawerHeader>

          <DrawerBody>
            <div className="ml-2 pb-3">
              <hr style={{ background: "#E4B49D" }} />

              <h6 className="font-weight-bold">Course Types</h6>
              <div className="ml-3">
                <CheckBox content={"Bachelors"} />
                <CheckBox content={"Masters"} />
                <CheckBox content={"Professionals"} />
                <CheckBox content={"Shorts"} />
              </div>

              <h6 className="font-weight-bold mt-3">Course Languages</h6>
              <div className="ml-3">
                <CheckBox content={"English"} />
                <CheckBox content={"Spanish"} />
                <CheckBox content={"French"} />
                <CheckBox content={"Italian"} />
                <CheckBox content={"Portuguese"} />
                <CheckBox content={"German"} />
              </div>

              <h6 className="font-weight-bold mt-3">Categories</h6>
              <div className="ml-3">
                <CheckBox content={"Web Development"} />
                <CheckBox content={"Data Science"} />
                <CheckBox content={"Machine Learning"} />
                <CheckBox content={"Mobile App Development"} />
                <CheckBox content={"Cybersecurity"} />
                <CheckBox content={"Digital Marketing"} />
                <CheckBox content={"Sales and Marketing"} />
                <CheckBox content={"Spa"} />
                <CheckBox content={"Tourism"} />
                <CheckBox content={"Business Skills"} />
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  </>
  )
}

export default LeftSidebar
