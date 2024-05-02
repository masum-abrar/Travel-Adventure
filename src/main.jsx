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
import { CountrySpots } from "./components/CountrySpots.jsx";
import PrivateRoute from "./routers/PrivateRoute.jsx";


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
        element : <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>,
        
      },
      {
        path : "/mylist",
        element : <PrivateRoute><Mylist></Mylist></PrivateRoute>
   
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
         loader: ({params}) => fetch(`https://tour-server-site.vercel.app/newspot/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`https://tour-server-site.vercel.app/newspot/${params.id}`)
      },
      {
        path: "country/:id",
        element: <CountrySpots></CountrySpots>,
        loader: ({params}) => fetch(` https://tour-server-site.vercel.app/country/${params.id}`)
      }
      
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

