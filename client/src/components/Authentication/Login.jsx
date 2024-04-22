import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Flex,
    Img,
    Button,
    Grid,
} from '@chakra-ui/react';
import { FcGoogle } from "react-icons/fc";
import { IoMdLock } from 'react-icons/io';

// import Unstop from '../../assets/img/Unstop.svg';
import Logo from '../../assets/img/Logo1.png'
import './InputLabelAnimation.css';
import Carousel from './Carousel';
import { login } from '../../redux/actions/auth';

const Login = () => {
    // const messagebackend = useSelector((state) => (state.authReducer.message));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email || !password) {
            toast.error('Please fill all the fields');
            setLoading(false);
            return false;
        }
        const loginData = {
            email,
            password
        }
        dispatch(login(loginData, navigate)).then((repsonse) => {
            if (!(repsonse.success)) {
                toast.error(repsonse.message);
            }
        })
        // setLoading(false);
        // if (!loading && messagebackend) {
        //     setLoading(true);
        //     setTimeout(() => {
        //         toast.error(messagebackend);
        //     }, 1000); // Wait for 1 second
        // }
        setLoading(false);
    }
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
                        onSubmit={handleSubmit}
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
                        </div>
                        <br />
                        {/* <Button
                            variant="outline"
                            borderColor="#ff7f6eff"
                            color="#000"
                            size="lg"
                            p={{ base: '1rem', md: '1.5rem' }} // Add padding to button}
                            w={{ base: '100%', md: 'auto' }} // Full width on small screens, auto width on medium and larger screens
                            mb={{ base: '0.5rem', md: 0 }} // Add bottom margin on small screens
                        >
                            <FcGoogle className='googleicon' />
                            <p className='googlebutton__text'>
                                Continue with Google
                            </p>

                        </Button> */}

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
                                <label>
                                    {/* Email */}
                                    Email
                                </label>
                            </div>


                            <div class="input-field">
                                <input
                                    type="text"
                                    required
                                    spellCheck="false"
                                    autoComplete="on"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    style={{ width: '100%' }}
                                />
                                <label>
                                    {/* Password */}
                                    Contraseña
                                </label>
                            </div>
                            <div className='d-flex g-2 mt-3'
                            onClick={() => navigate('/forgot-password')}
                            style={{ color: '#005CB8' }}>
                                <IoMdLock />
                                <p className='ml-1' style={{
                                    color: '#005CB8',
                                    cursor: 'pointer'
                                }}>
                                    Forgot Password?
                                </p>
                            </div>
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
                            {/* Sign In */}
                            Registrate aquí
                        </Button>
                        <br />
                        {/* Don't have an account?{' '} */}
                        ¿No tienes un usuario?
                        <NavLink
                            style={{
                                color: '#005CB8',
                                textDecoration: 'none',
                            }}
                            to="/signup"
                        >
                            Signup
                        </NavLink>
                    </form>
                </Flex>
            </Flex>
        </div >
    )
}

export default Login
