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

        if (!password || !confirmPassword) {
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
                                <h3 className="text-center mb-4">
                                    {/* Reset Password */}
                                    Cambiar contraseña
                                </h3>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">
                                        {/* New Password */}
                                        Nueva contraseña
                                    </label>
                                    <div className='input-group'>
                                        <input
                                            type={showPassword ? "password" : "text"}
                                            onChange={(e) => setPassword(e.target.value)}
                                            id="password"
                                            name="password"
                                            className="form-control"
                                            // placeholder="Enter new password"
                                            placeholder="Ingrese nueva contraseña"
                                        />
                                        <div className="input-group-append" style={{ justifyContent: 'right' }}>
                                            <button
                                                className="btn btn-outline-dark justify-right"
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">
                                        {/* Confirm New Password */}
                                        Confirmar nueva contraseña
                                    </label>
                                    <div className='input-group'>
                                        <input
                                            type={showConfirmPassword ? "password" : "text"}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            className="form-control"
                                            // placeholder="Confirm new password"
                                            placeholder="Confirmar nueva contraseña"
                                        />
                                        <div className="input-group-append" style={{ justifyContent: 'right' }}>
                                            <button
                                                className="btn btn-outline-dark justify-right"
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            >
                                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    className='btn rounded-pill w-100 mt-2 mb-2'
                                    style={{ background: '#E4B49D', color: 'white' }}
                                >
                                    {/* Reset Password */}
                                    Cambiar contraseña
                                </button>
                                <button
                                    type="button"
                                    className='btn rounded-pill mt-2 p-2'
                                    style={{ backgroundColor: '#FAEFE8', color: 'black' }}
                                    onClick={() => window.location.href = '/login'}
                                >
                                    {/* Back to Login */}
                                    Volver al inicio de sesión
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
