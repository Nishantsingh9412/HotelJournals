import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useLinkClickHandler, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signup } from '../../redux/actions/auth';


// const notify = () => toast.error('Some Error is there ');



const Signup = () => {

    const messagebackend = useSelector((state) => (state.authReducer.message));
    console.log("I am from signup "+ messagebackend);
    
    const [firstName, SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup({ firstName, lastName, email, password },navigate));
    }

    //validate all the fields
    const validate = () => {
        if(messagebackend){
            toast.error(messagebackend);
            return false;
        }else{
            if (!firstName || !lastName || !email || !password) {
                toast.error('Please fill all the fields');
                return false;
            }else if(firstName.length < 2){
                toast.error('First Name should be atleast 2 characters long');
                return false;
            }
            else if (password.length < 6) {
                toast.error('Password should be atleast 6 characters long');
                return false;
            }else if(!email.includes('@')){
                toast.error('Please enter a valid email');
                return false;
            }
            return true;
        }   
    }

    // useEffect(() => {
    //     if (messagebackend) {
    //         toast.error(messagebackend);
    //     }
    // }, [messagebackend]);

    return (
        <div className='container pt-5'>
            <form onSubmit={handleSubmit}>

                {/*   */}
                {
                    // messagebackend ? (
                    //    toast.error(messagebackend)
                    // ) : (<></>)
                }
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name='firstName' id="inputFname" placeholder="First Name" autoComplete='off' onChange={(e) => { SetFirstName(e.target.value) }} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name='lastName' id="inputLname" placeholder="Last Name" onChange={(e) => { SetLastName(e.target.value) }} />
                    </div>
                </div>

                {/*  */}

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" name='email' id="inputEmail4" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" name='password' id="inputPassword4" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                </div>
                <button type="submit" onClick={validate}  className="btn btn-primary w-100 mt-2">Sign Up</button>
                <Toaster />
            </form>
        </div>
    )
}

export default Signup
