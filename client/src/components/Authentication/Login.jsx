import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { login } from '../../actions/auth';

const Login = () => {

    const messagebackend = useSelector((state) => (state.authReducer.message));

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email,password},navigate));     // login action
    }

    const validate = () => {
        if(messagebackend){
            toast.error(messagebackend);
            console.log("from Validate" +  messagebackend);
        }
    }




    return (

        <div className='container mt-4' style={{ marginLeft: '25%' }}>
            <form onSubmit={handleSubmit}>
                {/* {messagebackend ? (
                    <div className='alert alert-info w-50' >
                        {messagebackend} 
                    </div>
                ) : (<></>)} */}
                <div className="form-row ">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} id="inputEmail4" placeholder="Enter email" />
                    </div>
                </div>
                <div className='form-row'>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} id="inputPassword4" placeholder="Enter password" />
                    </div>
                </div>
                <button className='btn btn-primary' type='submit'  onClick={validate}  > Login  </button>
                <Toaster />
            </form>
        </div>
    )
}

export default Login
