import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Main from "../Page/Main/Main";
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
                loader:(()=>fetch('http://localhost:5000/services'))
            },
            {
                path:'/services/:id',
                element: <Servicedetails></Servicedetails>,
                loader: (({params}) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                })
            }
        ])
    }
])
export default router