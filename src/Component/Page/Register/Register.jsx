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
        <div className=' bg-sky-700 '>
            <Helmet>
                <title>register</title>
            </Helmet>
            <div className="container mx-auto">
                <div className="flex md:flex-row flex-col-reverse  justify-between gap-6 py-10  mx-8">
                    <div className="shadow-lg shadow-slate-900 p-4 bg-cyan-600 lg:w-1/3 md:w-2/4 w-full">
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
                    <div className='lg:w-2/3 lg:ml-16 ml-0 md:w-2/4 w-full mx-auto'>
                        <img src={imgregis} alt="" className='h-96' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;