import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage, Home } from "./pages";
import {
  InsertionSort,
  MergeSort,
  QuickSort,
  SelectionSort,
} from "./sorting-algorithms";

import icon_sort from "/icon_sort.svg";
import "./App.css";
import "./styles/styles.css";
import { Footer, Navbar } from "./components";

const paths = [
  { path: "/", element: <Home /> },
  { path: "/sort/selection", element: <SelectionSort /> },
  { path: "/sort/insertion", element: <InsertionSort /> },
  { path: "/sort/merge", element: <MergeSort /> },
  { path: "/sort/quick", element: <QuickSort /> },
];

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: paths,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <>
      {/* <header>Navbar</header> */}
      <code>
        Coding & design stage: please be patient{" "}
        <span style={{ fontSize: "20px" }}>&#128521;</span>
      </code>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
