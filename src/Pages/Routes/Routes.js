import { createBrowserRouter, Route } from "react-router-dom";
import Blog from "../../Component/Blog/Blog/Blog";
import Courses from "../../Component/Courses/Courses/Courses";
import RightSideNav from "../../Component/Courses/RightSideNav/RightSideNav";
import Error from "../../Component/Error/Error";


import Main from "../../layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";


    export const routes=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader:()=>fetch(`http://localhost:5000/courses`)

                },
                {
                    path:'/rightSideNav',
                    element:<RightSideNav></RightSideNav>,
                    // loader:()=>fetch(`http://localhost:5000/courses`)
                },
                
                
                {
                    path:'/courses/:id',
                    element:<Courses></Courses>,
                    // loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
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
   