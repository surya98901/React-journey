import React, {lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { About } from "./components/About";
import {Contact} from "./components/Contact";
import { Error } from "./components/Error";
import ResContainer from "./components/ResContainer";
import Footer from "./components/footer";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import { Shimmer } from "./components/Shimmer";



const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => (
  <div className="mainContainer">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ResContainer />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/menu/:resid",
        element: <ResMenu />,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback = {<Shimmer />}><Grocery /></Suspense>,
        errorElement: <Error />,
      }
    ],
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
 