import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { HomePage, CinemaPage, MovieListPage, AddMoviePage } from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { path: "", element: <HomePage /> },
      { path: "cinema", element: <CinemaPage /> },
      { path: "movies", element: <MovieListPage /> },
      { path: "addMovie", element: <AddMoviePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
