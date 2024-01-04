import React from 'react';
// import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from './Context/Context';
import Router from "./Router";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <SkeletonTheme
        baseColor="#cacaca"
        highlightColor="#ffffff"
      >
        <RouterProvider router={Router} />
      </SkeletonTheme>
    </ContextProvider>
  </React.StrictMode>
);
