import React from 'react'
import 'animate.css';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import CheckBox from "./CheckBox";

const LeftSidebar = ({ onClose }) => {
  const btnRef = React.useRef();
  return (<>
    <div>

      <Drawer
        isOpen={true}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{ maxWidth: "100%" }}>
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