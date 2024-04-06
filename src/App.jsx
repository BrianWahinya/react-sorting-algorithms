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
      <header>Navbar</header>
      <Outlet />
      <footer>{new Date().getFullYear()} &copy; BrianWahinya</footer>
    </>
  );
}

export default App;
