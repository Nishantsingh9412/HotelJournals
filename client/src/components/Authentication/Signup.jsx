import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';


const notify = () => toast.error('Some Error is there ');


const Signup = () => {
    
    const [firstName,SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit =  (e) => {
        e.preventDefault();
        dispatch(signup({firstName,lastName,email,password},navigate))
    }


    
    return (
        <div className='container pt-5'>
            <form onSubmit={handleSubmit}>

                {/*   */}
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name='firstName' id="inputFname" placeholder="First Name"  autoComplete='off' onChange={(e) => {SetFirstName(e.target.value)}}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name='lastName' id="inputLname" placeholder="Last Name" onChange={(e) => {SetLastName(e.target.value)}} />
                    </div>
                </div>

                {/*  */}

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control"  name='email' id="inputEmail4" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" name='password'  id="inputPassword4" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
                    </div>
                </div>
                <button type="submit" onClick={notify} className="btn btn-primary w-100 mt-2">Sign Up</button>
                <Toaster />
            </form>
        </div>
    )
}

export default Signup
