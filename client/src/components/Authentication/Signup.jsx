import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Flex,
    Img,
    Button,
    Grid,
    transition,
} from '@chakra-ui/react';
import { Navigate, useLinkClickHandler, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import Unstop from '../../assets/img/Unstop.svg';
import './InputLabelAnimation.css';
import Carousel from './Carousel';
import { signup } from '../../redux/actions/auth';
import { parsePhoneNumber } from 'react-phone-number-input';


// const notify = () => toast.error('Some Error is there ');



const Signup = () => {

    const messagebackend = useSelector((state) => (state.authReducer.message));
    console.log("I am from signup " + messagebackend);

    const [firstName, SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [user_type, SetUserType] = useState(''); // [candidate, recruiter, organizer]
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [country_code, setCountryCode] = useState('');
    const [phone_no, setPhone_no] = useState('');



    const dispatch = useDispatch();
    const navigate = useNavigate();



    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     //  Validation 
    //     if (!firstName || !lastName || !email || !password || !confirmPassword || !country_code || !phone_no || !user_type) {
    //         toast.error('Please fill all the fields');
    //         return false;
    //     } else if (firstName.length < 2) {
    //         toast.error('First Name should be atleast 2 characters long');
    //         return false;
    //     }
    //     else if (password.length < 6) {
    //         toast.error('Password should be atleast 6 characters long');
    //         return false;
    //     } else if (password !== confirmPassword) {
    //         toast.error('Passwords do not match');
    //         return false;
    //     }
    //     else if (!/^\d{7,15}$/.test(phone_no)) {
    //         toast.error('Please enter a valid phone number');
    //         return false;
    //     }

    //     dispatch(signup({
    //         firstName, lastName, user_type, email, password,
    //         confirmPassword, country_code, phone_no
    //     }, navigate));

    //     console.log(user_type, firstName, lastName, email, password, confirmPassword, country_code, phone_no)

    //     if (messagebackend) {
    //         toast.error(messagebackend);
    //     } else {
    //         toast.success('User Registered Successfully');
    //     }

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("I am from signup 2")
        const allValues = {
            firstName, lastName, user_type, email, password,
            confirmPassword, country_code, phone_no
        }
        console.log(allValues);
    }

    //validate all the fields
    // const validate = () => {
    //     if(messagebackend){
    //         toast.error(messagebackend);
    //         return false;
    //     }else{
    //         if (!firstName || !lastName || !email || !password) {
    //             toast.error('Please fill all the fields');
    //             return false;
    //         }else if(firstName.length < 2){
    //             toast.error('First Name should be atleast 2 characters long');
    //             return false;
    //         }
    //         else if (password.length < 6) {
    //             toast.error('Password should be atleast 6 characters long');
    //             return false;
    //         }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    //             toast.error('Please enter a valid email');
    //             return false;
    //         }
    //         return true;
    //     }   
    // }

    // useEffect(() => {
    //     if (messagebackend) {
    //         toast.error(messagebackend);
    //     }
    // }, [messagebackend]);

    return (
        <div
            className="signup"
            borderRadius="0px 30px 0px 30px"
            style={{
                height: 'auto',
                marginTop: '1vw',
                marginBottom: '1vw',
            }}
        >
            <Flex
                alignContent={'center'}
                justifyContent={'center'}
                className="signup-center-box"
            >
                <div className='curousel_box'>
                    <Carousel />
                </div>
                <Flex
                    className='box-form'
                    direction="column"
                    align="center"
                    justify="center"
                // width={{ base: '50%', md: '50%',lg:"100%" }}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="form-signup"
                        style={{
                            width: '100%',
                            padding: '1rem',
                        }}
                    >
                        <Img
                            className='LogoImg'
                            src={Unstop}
                            alt="unstopablePhoto"
                        />
                        <div
                            style={{
                                marginLeft: '1%',
                                marginBottom: '1rem',
                            }}
                            className="text"
                        >
                            <h6 style={{ marginLeft: '2%', fontSize: "12px" }}>
                                Ready to Be Unstopable!
                            </h6>
                            <h3 style={{ fontSize: "18px" }}>👋 Create an account</h3>
                            <h5 style={{ marginLeft: '2%', fontSize: "14px" }}>
                                Create account as a
                            </h5>
                        </div>
                        <Flex
                            className='flexButton'
                            justifyContent="center"
                            alignItems="center"
                            flexDirection={{ base: 'row', md: 'row' }} // Stack on small screens, align horizontally on medium and larger screens
                            gap={{ base: '1rem', md: '1.5rem' }} // Adjust spacing between buttons
                            mt={{ base: '1rem', md: 0 }} // Add top margin on small screens
                        >
                            <Button
                                style={{ border: user_type != "candidate" ? "2px dotted #7f7f7f" : "2px solid #cc341f", color: user_type != "candidate" ? "#000" : "#cc341f", borderRadius: "25px 25px 25px 25px", transition: "all 0.3s linear" }}
                                onClick={() => SetUserType("candidate")}
                                variant="outline"
                                borderColor="#ff7f6eff"
                                color="#000"
                                size="lg"
                                fontSize="15px"
                                p={{ base: '1rem', md: '1.5rem' }} // Add padding to button}
                                w={{ base: '100%', md: 'auto' }} // Full width on small screens, auto width on medium and larger screens
                                mb={{ base: '0.5rem', md: 0 }} // Add bottom margin on small screens
                            >
                                Candidate
                            </Button>
                            <Button
                                style={{ border: user_type != "recruiter" ? "2px dotted #7f7f7f" : "2px solid #cc341f", color: user_type != "recruiter" ? "#000" : "#cc341f", borderRadius: "25px 25px 25px 25px", transition: "all 0.3s linear" }}
                                onClick={() => SetUserType("recruiter")}
                                variant="outline"
                                borderColor="#ff7f6eff"
                                fontSize="15px"
                                py={{ base: '1rem', md: '1.5rem' }} // Add padding to button}
                                color="#000"
                                size="lg"
                                w={{ base: '100%', md: 'auto' }}
                                mb={{ base: '0.5rem', md: 0 }}
                            >
                                Recruiter
                            </Button>
                            <Button
                                style={{ border: user_type != "educator" ? "2px dotted #7f7f7f" : "2px solid #cc341f", color: user_type != "educator" ? "#000" : "#cc341f", borderRadius: "25px 25px 25px 25px", transition: "all 0.3s linear" }}
                                onClick={() => SetUserType("educator")}
                                variant="outline"
                                borderColor="#ff7f6eff"
                                fontSize="15px"
                                p={{ base: '1rem', md: '1.5rem' }} // Add padding to button}
                                color="#000"
                                size="lg"
                                w={{ base: '100%', md: 'auto' }}
                                mb={{ base: '0.5rem', md: 0 }}
                            >
                                Organiser
                            </Button>
                        </Flex>
                        {/* <br />
                    <br /> */}
                        <div className='form-fields'>
                            <Flex className='name-container'>
                                <div class="input-field">
                                    <input
                                        type="text"
                                        required
                                        spellCheck="false"
                                        autoComplete="off"
                                        onChange={(e) =>
                                            SetFirstName(e.target.value)
                                        }
                                    />
                                    <label>First Name</label>
                                </div>
                                <div class="input-field">
                                    <input
                                        type="text"
                                        required
                                        spellCheck="false"
                                        autoComplete="off"
                                        onChange={(e) =>
                                            SetLastName(e.target.value)
                                        }
                                    />
                                    <label>Last Name</label>
                                </div>
                            </Flex>
                            <div class="input-field">
                                <input
                                    style={{ width: '100%' }}
                                    type="text"
                                    required
                                    spellCheck="false"
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label>Email</label>
                            </div>
                            <div class="input-field">
                                <input
                                    style={{ width: '100%' }}

                                    type="text"
                                    required
                                    spellCheck="false"
                                    autoComplete="off"
                                />
                                <label>User Name</label>
                            </div>
                            <div class="input-field">
                                {/* <input
                                style={{ width: '100%' }}
                                type="text"
                                required
                                spellCheck="false"
                                autoComplete="off" 
                            />*/}
                                <PhoneInput
                                    international
                                    defaultCountry="US"
                                    value={phone_no}
                                    onChange={(value) => {
                                        const phoneNumber = parsePhoneNumber(value);
                                        const countryCode = phoneNumber?.countryCallingCode;
                                        // const nationalNumber = phoneNumber?.nationalNumber;

                                        // Now you can use countryCode and nationalNumber as you wish
                                        // For example, you can set them in the state
                                        setCountryCode(countryCode);
                                        // setNationalNumber(nationalNumber);

                                        // Don't forget to update the original phone_no state
                                        setPhone_no(value);
                                    }}
                                    placeholder="Phone"
                                />
                                {/* <label>Phone</label> */}
                            </div>
                            <Flex style={{ width: '100%' }} className='password-container'>
                                <div class="input-field">
                                    <input
                                        type="text"
                                        required
                                        spellCheck="false"
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        style={{ width: '48% !important' }}
                                    />
                                    <label>Password</label>
                                </div>
                                <div class="input-field">
                                    <input
                                        type="text"
                                        required
                                        spellCheck="false"
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        style={{ width: '48% !important' }}
                                    />
                                    <label>Confirm Password</label>
                                </div>
                            </Flex>
                        </div>
                        <Button
                            mt={4}
                            style={{
                                backgroundColor: '#ff7f6eff',
                                color: 'white',
                                width: '100%',
                                // width: '48vw',
                            }}
                            type="submit"
                            size="lg"
                        >
                            Sign Up
                        </Button>
                        <br />
                        Already have an account?{' '}
                        <NavLink
                            style={{
                                color: '#0000f2ff',
                                textDecoration: 'none',
                            }}
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </form>
                </Flex>
            </Flex >
        </div >
    )
}

export default Signup
