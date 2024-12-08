import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainDashBoardComp from "../components/MainDashBoardComp";
import AboutComp from "../components/AboutComp";
import ContactsComp from "../components/ContactsComp";
import ProductsComp from "../components/ProductsComp";



const routing=createBrowserRouter([
    {path:"",element:<MainDashBoardComp/>},
    {path:"about",element:<AboutComp/>},
    {path:"contacts",element:<ContactsComp/>},
    {path:"products",element:<ProductsComp/>}
])

export default routing;