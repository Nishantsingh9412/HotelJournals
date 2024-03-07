import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Radio,
    Stack,
    useDisclosure,
    RadioGroup
} from '@chakra-ui/react'
import { Box, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import { FaHome, FaUser, FaCog, FaEnvelope } from "react-icons/fa";

function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')

    function SidebarIcons() {
        return (
            <Box
                position="fixed"
                left="0"
                top="0"
                bottom="0"
                width="50px"
                bg="gray.700"
                display="flex"
                flexDirection="column"
                justifyContent="space-around" 
                alignItems="center"
                padding="1rem"
            >
                <IconButton aria-label="Home" icon={<FaBars />} variant="ghost" colorScheme="whiteAlpha" onClick={onOpen} />
                <IconButton aria-label="Home" icon={<FaBars />} variant="ghost" colorScheme="whiteAlpha" onClick={onOpen} />
                <IconButton aria-label="User" icon={<FaUser />} variant="ghost" colorScheme="whiteAlpha" onClick={onOpen} />
                <IconButton aria-label="Settings" icon={<FaCog />} variant="ghost" colorScheme="whiteAlpha" onClick={onOpen} />
                <IconButton aria-label="Messages" icon={<FaEnvelope />} variant="ghost" colorScheme="whiteAlpha" onClick={onOpen} />
            </Box>
        );
    }

    return (
        <>
            <SidebarIcons />
            <Button colorScheme='blue' onClick={onOpen}>
                <i class="fas fa-bars"></i>
            </Button>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const RecruiterSidebar = () => {
    return (
        <div>
            {/* <PlacementExample /> */}
            <h2>This is Recruiter Sidebar  </h2>
        </div>
    )
}

export default RecruiterSidebar