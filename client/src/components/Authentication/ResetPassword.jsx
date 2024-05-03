import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import { resetPasswordAPI } from '../../api';

const ResetPassword = () => {
    const { token } = useParams();
    console.log('Token: \n')
    console.log(token)

    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [showPassword, setShowPassword] = React.useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(true);


    const handleResetPassword = (e) => {
        e.preventDefault();

        if(!password || !confirmPassword) {
            toast.error('Please fill all the fields');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords does not match');
            return;
        }

        const ResetpasswordData = {
            token: token,
            newPassword: password
        }
        
        resetPasswordAPI(ResetpasswordData).then((response) => {
            if (response.status === 200) {
                console.log(response)
                toast.success(response.data.message)
            } else {
                console.log(response)
                toast.error(response.data.message)
                throw new Error('Error Adding Item')
            }
        }).catch((error) => {
            console.log('Error Resetting  ------------------------------------------------>  Password ')
            toast.error(error?.response?.data?.message)
            throw error;
        });
    }


    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <ToastContainer />
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={handleResetPassword}>
                            <div className="card card-body">
                                <h3 className="text-center mb-4">Reset Password</h3>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">New Password</label>
                                    <input
                                        type={showPassword ? "password" : "text"}
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter new password"
                                    />
                                    <div className="input-group-append" style={{ justifyContent: 'right' }}>
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        type={showConfirmPassword ? "password" : "text"}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="form-control"
                                        placeholder="Confirm new password"
                                    />
                                    <div className="input-group-append" style={{ justifyContent: 'right' }}>
                                        <button
                                            className="btn btn-outline-secondary justify-right"
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>
                                <button type='submit' className="btn btn-primary btn-block" >Reset Password</button>
                                <button
                                    type="button"
                                    className="btn btn-info btn-block"
                                    onClick={() => window.location.href = '/login'}
                                >   Back to Login </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
