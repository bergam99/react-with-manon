import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Header from "../Header/Header";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import NotFound from "../../pages/NotFound";

const NavRouter = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default NavRouter;
