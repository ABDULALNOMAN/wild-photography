import React from 'react';

const Blog = () => {
    return (
        <div className=' bg-sky-700'>
            <div className='container mx-auto'>
                    <h1 className='text-2xl pt-4'>Difference between SQL and NoSQL</h1>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <p className='border p-3'> SQL is the programming language used to interface with relational databases.</p>
                        <p className='border p-3'>NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    </div>
                    <h1 className='text-2xl pt-4'>What is JWT, and how does it work?</h1>
                    <div>
                        <p>jSON Web Token, is an open standard used to share security information between two parties — a client and a server</p>
                        <ul className='grid md:grid-cols-3 gap-4'>
                            <li className='border p-3'>User sign-in using username and password or google/facebook</li>
                            <li className='border p-3'>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                            <li className='border p-3'>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                        </ul>
                    </div>
                    <h1 className='text-2xl pt-4'>What is the difference between javascript and NodeJS?</h1>
                    <ul className='grid md:grid-cols-3 gap-4'>
                        <li  className='border p-3'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed</li>
                        <li  className='border p-3'>liNode. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</li>
                    </ul>
                    <h1 className='text-2xl pt-4'>How does NodeJS handle multiple requests at the same time?</h1>
                    <p className='pb-4'>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                  </p>
            </div>
        </div>
    );
};

export default Blog;