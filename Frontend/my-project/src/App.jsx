import React from "react";
import Navbar from './Component/Navbar'
import Createform from "./page/Createform";



import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";
import About from "./page/About";
import UpdateEmp from "./page/UpdateEmp";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Createform", element: <Createform /> },
      {path:"/cart",element:<Cart/>},
      {path:"/about",element:<About/>},
      {path:"/UpdateEmp/:id",element:<UpdateEmp/>}
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App; 
