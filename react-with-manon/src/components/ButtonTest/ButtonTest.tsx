import React from "react";
import "./ButtonTest.css";

const ButtonTest = () => {
  const click = () => {
    console.log("donne moi tes code banquaire je te donne 1000 euros");
  };

  const enter = () => {
    console.log("VAS Y CLIQUE!");
  };

  const leave = () => {
    console.log("Ne pars pas c un button toxique");
  };

  return (
    <button
      onClick={click}
      onMouseEnter={enter}
      onMouseLeave={leave}
      className="ButtonTest__button"
    >
      💰 Click pour gagner 1000 euros 💶
    </button>
  );
};

export default ButtonTest;
