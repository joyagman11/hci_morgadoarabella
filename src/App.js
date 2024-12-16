import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Notfound from "./Components/Notfound/Notfound";
import Home from "./Components/Home/Home";


let active = (e) => {
  document.querySelectorAll("ul li a.active").forEach(function (item) {
    item.classList.remove("active");
  });
  e.classList.add("active");
  e.classList.remove("active");
  e.classList.add("active");
};
let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout active={active} />,
    children: [
      { index: true, element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
