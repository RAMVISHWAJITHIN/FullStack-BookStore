
import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import Home from '../pages/home/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import CartPage from '../pages/books/CartPage';
import CheckOut from '../pages/books/CheckOut'
import SingleBook from '../pages/books/SingleBook';
import PrivateRoute from './PrivateRoute';

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children:[
                {
                path:"/",
                element:<Home/>
            },
            {
                path:"/orders",
                element:<div>orders</div>

            },
            {
                path:"/about",
                element:<div>About</div>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/cart",
                element:<CartPage/>
            },
            {
                path:"/checkout",
                element:<PrivateRoute><CheckOut/></PrivateRoute>
            },
            {
                path:"/books/:id",
                element:<SingleBook/>
            },
            ]
        }])


export default router;