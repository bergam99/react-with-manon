import { Fragment } from "react";
import Header from "./components/Header/Header";
import BackButton from "./components/BackButton/BackButton";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import "./App.css";
import ContainerFlexBetween from "./components/ContainerFlexBetween/ContainerFlexBetween";
import ButtonTest from "./components/ButtonTest/ButtonTest";
import ButtonResuse from "./components/ButtonReuse/ButtonResuse";
import { Outlet } from "react-router-dom";
import NavRouter from "./components/NavRouter/NavRouter";

const App = () => {
  const reuse = () => console.log("reusable button");
  return (
    <Fragment>
      {/* <ButtonResuse title="Retour" callback={back} /> */}
      <ButtonResuse title="reusable button" callback={reuse} />

      <Header />
      <section className="App__wrapper">
        <BackButton />
        <ProductDetails />
      </section>
      {/* reusable */}
      <ContainerFlexBetween title="Partenaires">
        <p>
          <a href="">Microsoft</a>
        </p>
        <p>
          <a href="">Apple</a>
        </p>
        <p>
          <a href="">Meta</a>
        </p>
        <p>
          <a href="">Amazon</a>
        </p>
        <p>
          <a href="">Alphabet</a>
        </p>
      </ContainerFlexBetween>
      <ButtonTest />
      <Outlet />

      <NavRouter />
    </Fragment>
  );
};

export default App;

// event
// onClick, onDoubleClick, onDrug, onMouseEnter...
