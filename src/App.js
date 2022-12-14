
import { Toaster } from 'react-hot-toast';
import { Route, RouterProvider } from 'react-router';
import './App.css';
import Home from './Pages/Home/Home';

import { routes } from './Pages/Routes/Routes';


function App() {
  return (
   
   <div>
   
     <RouterProvider router={routes}></RouterProvider>
     <Toaster></Toaster>
     
     
    </div>
    
  );
}

export default App;
