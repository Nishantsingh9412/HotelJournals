import React, { useEffect, useState } from 'react'
// React Bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
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
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getJobSingleAction } from '../../redux/actions/jobsAdmin';
import { fetchAllUsers } from '../../redux/actions/users';
import ProfilePic from '../User_profile/ProfilePic';
import SideDrawerProfile from './SideDrawerProfile';

const ApplicantsList = ({ applicants }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = useState('xl')

    return (
        <div className='container mt-2'>
            <ListGroup>
                {applicants?.map((applicant, index) => (
                    <ListGroup.Item
                        key={index}
                        className={`d-flex align-items-center ${index % 2 === 0 ? 'bg-light' : ''}`}
                        onClick={() =>
                            onOpen()
                        }
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Shadow" // replace with your image source
                            alt="Applicant"
                            className="mr-3 rounded-circle"
                            style={{ width: '50px', height: '50px' }}
                        />
                        <div>
                            <strong className="d-block">{applicant?.fname} {applicant?.lname}</strong>
                            <small className="text-muted"><strong>Email:</strong> {applicant?.email}</small><br />
                            <small className="text-muted"><strong>Phone No:</strong> {applicant?.country_code} {applicant?.phone}</small>
                        </div>
                    <SizeExample
                        fname={applicant?.fname}
                        id={applicant?._id}
                    />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}


function SizeExample(props) {
    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()


    const handleClick = (newSize) => {
        //   setSize(newSize)
        onOpen();
    }
    return (
        <>
            <Button
                onClick={() => handleClick('xl')}
                m={4}
            >
                <i className="fas fa-eye"></i>
            </Button>

            <Drawer onClose={onClose} isOpen={isOpen} size={'xl'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{props?.fname}</DrawerHeader>
                    <DrawerBody>
                        <SideDrawerProfile
                            id={props?.id}
                        />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const ManageParticularJob = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobSingleAction(id))
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    const singleJobReducer = useSelector((state) => state?.getSingleJobReducer);
    console.log("jobApplicants:")
    const jobApplicants = singleJobReducer?.result?.applicants
    console.log(jobApplicants);

    const usersReducer = useSelector((state) => state.usersReducer);
    const allUSerDetails = usersReducer?.allUserDetails;
    console.log(allUSerDetails);
    // const appliedUsers = singleJobReducer?.result?.applicants.filter?.(applicant => usersReducer?.result?.find?.(user => user?._id === applicant));

    // const appliedUsers = allUSerDetails?.filter((user) => jobApplicants?.map((applicants) => applicants.includes(user?._id)));
    const appliedUsers = allUSerDetails?.filter((user) => jobApplicants?.includes(user?._id));
    console.log("Applied Users")
    console.log(appliedUsers);


    // console.log(appliedUsers);
    console.log("These are all Users");
    console.log(usersReducer);

    return (
        <div>
            <ApplicantsList applicants={appliedUsers} />
        </div>
    )
}

export default ManageParticularJob
