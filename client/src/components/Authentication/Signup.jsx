import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useLinkClickHandler, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signup } from '../../redux/actions/auth';

const Signup = () => {

    const messagebackend = useSelector((state) => (state.authReducer.message));
    console.log("I am from signup "+ messagebackend);
    
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



    const handleSubmit = (e) => {
        e.preventDefault();

        //  Validation 
        if (!firstName || !lastName || !email || !password || !confirmPassword || !country_code || !phone_no || !user_type) {
            toast.error('Please fill all the fields');
            return false;
        }else if(firstName.length < 2){
            toast.error('First Name should be atleast 2 characters long');
            return false;
        }
        else if (password.length < 6) {
            toast.error('Password should be atleast 6 characters long');
            return false;
        }else if(password !== confirmPassword){
            toast.error('Passwords do not match');
            return false;
        }
        else if(!/^\d{7,15}$/.test(phone_no)){
            toast.error('Please enter a valid phone number');
            return false;
        }

        dispatch(signup({
            firstName, lastName, user_type , email,  password,
            confirmPassword, country_code, phone_no
        }, navigate));

        console.log(user_type, firstName, lastName, email, password, confirmPassword, country_code, phone_no)

        if(messagebackend){
            toast.error(messagebackend);
        }else{
            toast.success('User Registered Successfully');
        }

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
        <div className='container pt-5'>
            <form>

                {/*   */}
                {
                    // messagebackend ? (
                    //    toast.error(messagebackend)
                    // ) : (<></>)
                }
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label htmlFor="create_account_as"> Create account as </label>
                        <select className='ml-2' onChange={(e) => { SetUserType(e.target.value) }}>
                            <option value="select"> Select Option</option>
                            <option value="candidate">Candidate</option>
                            <option value="recruiter">Recruiter</option>
                            <option value="educator">Educator</option>
                        </select>
                    </div>
                </div>
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
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" name='password' id="inputPassword4" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4"> Confirm Password</label>
                        <input type="password" className="form-control" name='password' id="inputPassword4" placeholder="Password" onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-group col-md-6'>
                        <label htmlFor="countryCode"> Country Code </label>
                        <input type="text" className="form-control"  placeholder="Country Code" onChange={(e) => { setCountryCode(e.target.value) }} />
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="phone_no"> Phone Number </label>
                        <input type="tel" className="form-control"  placeholder="Phone Number" onChange={(e) => { setPhone_no(e.target.value) }} />
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit}  className="btn btn-primary w-100 mt-2 mb-2">Sign Up</button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default Signup