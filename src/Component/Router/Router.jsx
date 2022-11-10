import { createBrowserRouter } from "react-router-dom";
import Addservices from "../Page/Addservices/Addservices";
import Blog from "../Page/Blog/Blog";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Main from "../Page/Main/Main";
import Myreviews from "../Page/Myreviews/Myreviews";
import Notfound from "../Page/Notfound/Notfound";
import Privetroute from "../Page/Privetroute/Privetroute";
import Register from "../Page/Register/Register";
import Servicedetails from "../Page/Servicedetails/Servicedetails";
import Services from "../Page/Services/Services";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: ([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader:(()=>fetch('https://creative-assign-server-abdulalnoman.vercel.app/services'))
            },
            {
                path:'/services/:id',
                element: <Servicedetails></Servicedetails>,
                loader: (({params}) => {
                    return fetch(`https://creative-assign-server-abdulalnoman.vercel.app/services/${params.id}`)
                })
            },
            {
                path:'/reviews',
                element:<Privetroute><Myreviews></Myreviews></Privetroute>
            },
            {
                path: '/addservices',
                element:<Privetroute><Addservices></Addservices></Privetroute>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
        ])
    },
    {
        path: '*',
        element:<Notfound></Notfound>
    }
])
export default router