
import App from './App.jsx'
import About from './about.jsx';
import Quit from './quit.jsx';
import './index.css'
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "about",
    element: <About/>,
  },
  {
      path:"quit",
      element: <Quit/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
