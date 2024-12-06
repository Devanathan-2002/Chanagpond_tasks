import React from "react";
import { createBrowserRouter } from "react-router-dom";
import VirtualDom from "../components/VirtualDom";
import ToggleImageComp from "../task/ToggleImageComp";
import UserComponent from "../task/UserComponent";
import CounterComp from "../task/CounterComp";
import ChildComp from "../task/ChildComp";
import ReactHookComp from "../Hooks/ReactHookComp";
import UseEffectComp from "../Hooks/UseEffectComp";
import UseStateHookComp from "../Hooks/UseStateHookComp"
import MainDashBordComp from "../layout/MainDashBordComp";
import MyStateComp from "../components/MyStateComp";
import LoginComp from "../layout/LoginComp";
import MyFavColorComp from "../components/MyFavColorComp";
import FormValComp from "../components/FormValComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductEditComp from "../CRUD/ProductEditComp";

const routing = createBrowserRouter([
    { path: "mainDashBoard", element: <MainDashBordComp />, children: [{ path: "", element: <MyStateComp /> }, { path: "toggle", element: <ToggleImageComp /> }, { path: "hooks", element: <ReactHookComp />, children: [{ path: "usestate", element: <UseStateHookComp /> }, { path: "useeffect", element: <UseEffectComp /> }] }, { path: "myfavcolor", element: <MyFavColorComp newColor="red" /> }, { path: "form", element: <FormValComp /> }, { path: "productdash", element: <ProductDashComp />},{ path: "productadd", element: <ProductAddComp/> },{ path: "productedit/:id", element: <ProductEditComp/> }] },
    { path: "", element: <LoginComp /> },
    { path: "login", element: <LoginComp /> },
    { path: "virtualdom", element: <VirtualDom /> },
    { path: "image", element: <ToggleImageComp /> },
    { path: "user", element: <UserComponent /> },
    { path: "*", element: <CounterComp /> },
    { path: "hooks", element: <ReactHookComp />, children: [{ path: "usestate", element: <UseStateHookComp /> }, { path: "useeffect", element: <UseEffectComp /> }] }
]);
export default routing;