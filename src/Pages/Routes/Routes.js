import { createBrowserRouter, Route } from "react-router-dom";
import Blog from "../../Component/Blog/Blog/Blog";
import Courses from "../../Component/Courses/Courses/Courses";
import RightSideNav from "../../Component/Courses/RightSideNav/RightSideNav";
import Error from "../../Component/Error/Error";


import Main from "../../layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import TermsAndCondition from "../Others/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


    export const routes=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    //loader:()=>fetch(`http://localhost:5000/courses`)

                },
                {
                    path:'/rightSideNav',
                    element:<RightSideNav></RightSideNav>,
                    // loader:()=>fetch(`http://localhost:5000/courses`)
                },
                
                
                {
                    path:'/courses/:id',
                    element:<PrivateRoute><Courses></Courses></PrivateRoute>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },

                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/terms',
                    element:<TermsAndCondition></TermsAndCondition>

                },
                
                {
                    path:'/Blog/',
                    element:<Blog></Blog>
                },
                {
                    path:"*",
                    element:<Error></Error>
                }
               
    
            ]

           
        }
    ])
   