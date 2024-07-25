import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Accueil from "./pages/Accueil.jsx";
import DameDuLac from "./pages/DameDuLac.jsx";
import Carte from "./pages/Carte.jsx";

import "./index.css";
import DescriptionSite from "./pages/Description_sites.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/dame",
        element: <DameDuLac />,
      },
      {
        path: "/carte",
        element: <Carte />,
      },
      {
        path: "/description",
        element: <DescriptionSite />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
