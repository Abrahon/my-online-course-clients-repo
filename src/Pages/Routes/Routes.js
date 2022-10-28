import { createBrowserRouter, Route } from "react-router-dom";
import Blog from "../../Component/Blog/Blog/Blog";
import Checkout from "../../Component/Checkout/Checkout";
import CourseDetails from "../../Component/CourseDetails/CourseDetails";
import Courses from "../../Component/courses/Courses";
import Error from "../../Component/Error/Error";


import Main from "../../layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import TermsAndCondition from "../Others/TermsAndCondition/TermsAndCondition";
//import PrivateRoute from "./PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },

            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses/')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },




            {
                path: '/checkout',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)

            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>

            },

            {
                path: '/Blog/',
                element: <Blog></Blog>
            },
            {
                path: "*",
                element: <Error></Error>
            }


        ]


    }
])
