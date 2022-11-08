import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Main from "../Page/Main/Main";
import Register from "../Page/Register/Register";


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
            }
        ])
    }
])
export default router