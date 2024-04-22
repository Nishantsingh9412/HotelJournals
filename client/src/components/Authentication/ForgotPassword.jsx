import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdLock } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import { FaArrowLeft, FaUnlockAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {
    Flex,
    Img,
    Button,
    Grid,
} from '@chakra-ui/react';

import Logo from '../../assets/img/Logo1.png'
import './InputLabelAnimation.css';
import Carousel from './Carousel';
import { ForgotPasswordAPI } from '../../api';

const ForgotPassword = () => {

    const navigate = useNavigate();
    const [Email, setEmail] = useState('');

    const handleForgotPassword = (e) => {
        e.preventDefault();

        if (!Email) {
            return toast.error('Please enter your email address to reset your password.')
        }
        const emailData = {
            mail: Email
        }
        console.log(emailData)

        const ForgotPasswordPromise = ForgotPasswordAPI(emailData).then((response) => {
            if (response.status === 200) {
                console.log(response)
                return response.message
            } else {
                console.log(response)
                throw new Error('Error Adding Item')
            }
        }).catch((error) => {
            console.log('Error Adding ------------------------------------------------Item')
            toast.error(error.response.data.message)
            throw error;
        });

        toast.promise(ForgotPasswordPromise, {
            pending: 'Sending password reset link...',
            success: 'Password reset link has been sent to your email address.',
            // error: 'Something went wrong. Please try again.'
        })

    }

    return (
        <div>
            <ToastContainer />
            <div
                className="signup"
                borderRadius="0px 30px 0px 30px"
                style={{
                    height: 'auto',
                    marginTop: '1vw',
                    marginBottom: '1vw',
                }}
            >
                <ToastContainer />
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
                            onSubmit={handleForgotPassword}
                            className="form-signup"
                            style={{
                                width: '100%',
                                padding: '1rem',
                            }}
                        >
                            <Img
                                className='LogoImg'
                                src={Logo}
                                alt="Logo"
                                width="5%"
                                height="10%"
                            />
                            <div
                                style={{
                                    marginLeft: '1%',
                                    marginBottom: '1rem',
                                }}
                                className="text"
                            >
                                {/* <h6 style={{ marginLeft: '2%', fontSize: "12px" }}>
                                Hi, Commando
                            </h6> */}
                                <h3 style={{ fontSize: "18px" }}>
                                    👋
                                    {/* Welcome Back to Hotel Journals! */}
                                    Bienvenido/a a Hotel Journals
                                </h3>
                                <div className='d-flex mt-2'>
                                    <FaUnlockAlt
                                        size={30}
                                        color='#E4B49D'
                                    />
                                    <h3 className='mt-0 pl-2'>
                                        Forgot Password?
                                    </h3>
                                </div>
                                <p>Create a new password to login your account.</p>

                            </div>
                            <br />
                            <div className='form-fields'>
                                <div class="input-field">
                                    <input
                                        style={{ width: '100%' }}
                                        type="text"
                                        required
                                        spellCheck="false"
                                        autoComplete="on"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label>Email</label>
                                </div>
                                <button
                                    type='submit'
                                    className='btn btn-dark rounded-pill mt-4 p-2'
                                >
                                    Reset Password
                                </button>
                                <button
                                    type='submit'
                                    className='btn btn-primary rounded-pill mt-2 p-2'
                                    onClick={() => navigate('/login')}
                                >    Back to Login </button>
                            </div>
                        </form>
                    </Flex>
                </Flex>
            </div >


        </div>
    )
}

export default ForgotPassword
