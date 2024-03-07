import React from 'react'

import { useNavigate } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

import logo from '../../../assets/img/logo.png'

const RecruiterNavbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                {/* <div> */}
                <div className='d-flex'>
                {/* <IconButton
                        aria-label="Notification"
                        icon={<FaChevronRight />}
                        size="lg"
                        ml={4}
                        variant="outline"
                        colorScheme="blue"
                    /> */}
                    <IconButton
                        aria-label="Notification"
                        icon={<FaChevronLeft />}
                        size="lg"
                        ml={4}
                        variant="outline"
                        onClick={() => navigate(-1)}
                        colorScheme="blue"
                    />
                    <a class="navbar-brand" href="#">
                        <img
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top ml-3"
                            alt="logo"
                        />
                    </a>
                </div>
            </nav>

        </div>
    )
}

export default RecruiterNavbar
