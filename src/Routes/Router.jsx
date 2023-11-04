import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/signup",
                element : <SignUp></SignUp>
            },
            {
                path : "/checkout/:id",
                element : <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader : ({params}) => fetch(`https://car-doctor-server-ten-jade.vercel.app/services/${params.id}`)
            },
            {
                path : "/bookings",
                element : <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    },
]);

export default router;