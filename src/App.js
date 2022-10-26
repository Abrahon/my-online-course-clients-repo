
import { Route, RouterProvider } from 'react-router';
import './App.css';
import Error from './Component/Error/Error';
import { routes } from './Pages/Routes/Routes';


function App() {
  return (
   
   <div>
   
     <RouterProvider router={routes}></RouterProvider>
     
    </div>
    
  );
}

export default App;
