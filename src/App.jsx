import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage, Home } from "./pages";
import { InsertionSort, SelectionSort } from "./sorting-algorithms";

import icon_sort from "/icon_sort.svg";
import "./App.css";
import "./styles/styles.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sort/insertion",
        element: <InsertionSort />,
      },
      {
        path: "/sort/selection",
        element: <SelectionSort />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <>
      <header>Navbar</header>
      <Outlet />
      <footer>{new Date().getFullYear()} &copy; BrianWahinya</footer>
    </>
  );
}

export default App;
