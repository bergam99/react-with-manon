import { MouseEventHandler } from "react";
import style from "./Button.module.scss";

const Button = () => {
  const addToCart = () => {
    console.log("Produit ajouté au panier !");
  };
  const addToCart2 = (value: string) => {
    console.log(`${value} ajoute au panier`);
  };

  // const addToCart3 = (e: MouseEvent<HTMLElement>) => {
  //   console.log(e);
  // };

  return (
    <button
      className={style.button}
      // onClick={addToCart}
      // onClick={() => addToCart2("Tabouret")}
      // onClick={addToCart3}
    >
      Ajouter au panier
    </button>
  );
};

export default Button;
