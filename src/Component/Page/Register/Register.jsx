import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { CallContext } from '../../Contexting/Contexting';
import imgregis from "../../../assets/undraw_access_account_re_8spm.svg";

const Register = () => {
    const { createUserData } = useContext(CallContext)
    const handleCreateUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        createUserData(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Helmet>
                <title>register</title>
            </Helmet>
            <div className="bg-sky-700 ">
                <div className="grid grid-cols-2 gap-6 container mx-auto py-10 w-screen">
                    <div className="shadow-lg shadow-slate-900 bg-cyan-600 p-4 col-span-1 max-w-full">
                        <form onSubmit={handleCreateUser} className="">
                            <div className="">
                            <label className="label">
                                <span className="">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered input-info w-full" />
                            </div>
                            <div className="">
                            <label className="label">
                                <span className="">Password</span>
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
                    </div>
                    <div className='mx-auto col-span-1 w-full'>
                        <img src={imgregis} alt="" className='h-96' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;