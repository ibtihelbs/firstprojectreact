import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./app.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Main from "./layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleProd from "./pages/SingleProd";
const root = ReactDOM.createRoot(document.getElementById("root"));
const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/prod/:id",
        element: <SingleProd />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
