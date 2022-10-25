import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog/Blog";
import Courses from "../../Component/Courses/Courses/Courses";
import FAQ from "../../Component/FAQ/FAQ/FAQ";
import Main from "../../layout/Main";


    export const routes=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Courses></Courses>
                },
                {
                    path:'/FAQ/',
                    element:<FAQ></FAQ>
                },
                {
                    path:'/Blog/',
                    element:<Blog></Blog>
                },
    
            ]
        }
    ])
   