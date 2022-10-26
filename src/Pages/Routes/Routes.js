import { createBrowserRouter, Route } from "react-router-dom";
import Blog from "../../Component/Blog/Blog/Blog";
import Category from "../../Component/Category/Category/Category";
import Courses from "../../Component/Courses/Courses/Courses";
import Error from "../../Component/Error/Error";


import Main from "../../layout/Main";
import Home from "../Home/Home";


    export const routes=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>

                },
                {
                    path:'/courses/:id',
                    element:<Courses></Courses>
                },
                {
                    path:'/category',
                    element:<Category></Category>
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
   