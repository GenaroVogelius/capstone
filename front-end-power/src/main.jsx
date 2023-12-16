import React from 'react'
// import App from './App'
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContextProvider } from './Context/Context';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import NavMain from './components/nav/NavMain';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LoadingBox from "./components/Loading/LoadingBox.jsx";



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



