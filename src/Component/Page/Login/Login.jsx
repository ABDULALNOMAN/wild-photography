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
            <div className="bg-sky-700">
                <div className="grid grid-cols-3 container mx-auto">
                    <div className='col-span-2'>sdlfjsdfjsdjf</div>
                    <div className=" border col-span-1 bg-gray-500 p-4">
                        <form onSubmit={handleLoginUser} className="">
                            <div className="">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered input-info w-full" />
                            </div>
                            <div className="">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered input-info w-full" />
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