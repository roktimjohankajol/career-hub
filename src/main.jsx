import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Roots/Root.jsx';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>, 
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/', 
        element: <Home></Home>
      }, 
      {
        path: '/statistic', 
        element: <Statistic></Statistic>
      }, 
      {
        path:'/applied', 
        element: <AppliedJob></AppliedJob>
      }, 
      {
        path:'/blog', 
        element: <Blog></Blog>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
