import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import { CallContext } from '../../Contexting/Contexting';

const Login = () => {
    const { loginUserData, GoogleLoginUsers } = useContext(CallContext)
    const navigete = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const handleLoginUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUserData(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigete(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    const handleGoogleLogin = () => {
        GoogleLoginUsers()
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Helmet>
                <title>servicesDetails</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginUser} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleLogin} className='btn btn-info'>google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;