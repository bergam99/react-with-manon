import React, { Fragment } from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const AppRouter = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
  //   {
  //     path: "/products",
  //     element: <Products />,
  //   },
  // ]);
  // return <RouterProvider router={router} />;
  //  ici {router} = const router
  <Fragment>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Fragment>;
};

export default AppRouter;

// 1. install : npm install react-router-dom
// 2. creer un dossier route
// 3. créer un AppRouter.tsx et créer objects de routes
// 4. dans main.tsx appeler AppRouter à la place de App.
// 5. passer les routers en tant qu'enfant dans l'element racine donc de App.
// 6. <Outlet /> dans app entre header et footer
// 7. Link & NavLink(props existe, facile a changer le style)
