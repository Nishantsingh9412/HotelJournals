import React, { useState } from 'react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

function SizeExample(props) {
    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    

    const handleClick = (newSize) => {
    //   setSize(newSize)
      onOpen()
    }
    return (
      <>
          <Button
            onClick={() => handleClick(size)}
            m={4}
          >{`Open Drawer`}
          </Button>
  
        <Drawer onClose={onClose} isOpen={isOpen} size={'xl'}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{`drawer contents`}</DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consequat nisl vel pretium lectus quam id. Semper quis lectus
                nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                Lectus vestibulum mattis ullamcorper velit.
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }



const SidebarDashboard = (props) => {
    return (
        <div>
            <SizeExample />
        </div>
    )
}

export default SidebarDashboard
