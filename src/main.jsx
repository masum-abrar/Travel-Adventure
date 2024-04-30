import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

import { Home } from "./pages/Home.jsx";
import { Layout } from "./layouts/Layout.jsx";
import { AllTouristSpot } from "./pages/AllTouristSpot.jsx";
import { AddTouristSpot } from "./pages/AddTouristSpot.jsx";
import { Mylist } from "./pages/Mylist.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { SpotsDetails } from "./components/SpotsDetails.jsx";
import AuthProvider from "./providers/AuthProviders.jsx";
import { Update } from "./pages/Update.jsx";
import { LoadingProvider } from "./components/LoadingContext.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children :[
      {
        path : "/",
        element : <Home></Home>,
        // loader : () => fetch('../info.json')
        
        // loader : () => fetch('../book.json'),
      },
      {
        path : "/alltouristspot",
        element : <AllTouristSpot></AllTouristSpot>,
        // loader : () => fetch('../info.json')
        
        // loader : () => fetch('../book.json'),
      },
      {
        path : "/addtouristspot",
        element : <AddTouristSpot></AddTouristSpot>,
        
      },
      {
        path : "/mylist",
        element : <Mylist></Mylist>,
   
      },
      {
        path : "/login",
        element : <Login></Login>,
   
      },
      {
        path : "/registration",
        element : <Register></Register>,
   
      },
      {
        path : "*",
        element :<NotFound></NotFound>
        
        
      },
      {
        path: "/details/:id",
        element: <SpotsDetails></SpotsDetails>,
         loader: ({params}) => fetch(`http://localhost:5000/newspot/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/newspot/${params.id}`)
      },
      
    ]
  },
 
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
  <LoadingProvider>
  <AuthProvider>
    <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
    </AuthProvider>
  </LoadingProvider>
  </React.StrictMode>
);

