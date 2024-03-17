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
                <CheckBox content={"Diploma"} />
                <CheckBox content={"Professional"} />
                <CheckBox content={"ShortCourse"} />
                <CheckBox content={"Bootcamp"} />
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
                <CheckBox content={"IT and Software"} />
                <CheckBox content={"Business"} />
                <CheckBox content={"Development and Computing"} />
                <CheckBox content={"Finance and Accounting"} />
                <CheckBox content={"Office Productivity"} />
                <CheckBox content={"Personal Development"} />
                <CheckBox content={"Design"} />
                <CheckBox content={"Marketing"} />
                <CheckBox content={"Lifestyle"} />
                <CheckBox content={"Health and Safety"} />
                <CheckBox content={"Human Resources"} />
                <CheckBox content={"Leadership and Management"} />
                <CheckBox content={"Legal"} />
                <CheckBox content={"Photography and Video"} />
                <CheckBox content={"Health and Fitness"} />
                <CheckBox content={"Music"} />
                <CheckBox content={"Teacher and Academics"} />
                <CheckBox content={"Language"} />
                <CheckBox content={"Test Preparation"} />
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