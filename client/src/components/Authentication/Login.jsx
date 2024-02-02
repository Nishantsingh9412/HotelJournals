import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { login } from '../../redux/actions/auth';

const Login = () => {

    const messagebackend = useSelector((state) => (state.authReducer.message));

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        if(!email || !password){
            toast.error('Please fill all the fields');
            setLoading(false);
            return false;   
        }
        console.log(email, password);
        dispatch(login({email,password},navigate));    
        
        // setLoading(false);

        if(!loading && messagebackend){
            setLoading(true);
            setTimeout(() => {
                toast.error(messagebackend);
            }, 1000); // Wait for 1 second
        }
        setLoading(false);
    }

    // useEffect(() => {
    //     if (!loading && messagebackend) {
    //         toast.error(messagebackend);
    //     }
    // },[messagebackend,loading])




    return (

        <div className='container mt-4' style={{ marginLeft: '25%' }}>
            <form >
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
                <button className='btn btn-primary w-50' type='submit'  onClick={handleSubmit}  > {loading ? "Loading ... " : "Login"}  </button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default Login
