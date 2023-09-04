import React, { Fragment, useEffect, useState } from "react";

const QuantityPicket = () => {
  const [quantity, quantitySet] = useState(0);

  const addOne = () => {
    const newQuantity = quantity + 1;
    quantitySet(newQuantity);
  };

  const removeOne = () => {
    if (quantity <= 0) return;
    const newQuantity = quantity - 1;
    quantitySet(newQuantity);
  };

  //  quand [] est vide, appele une seule fois a l'initialisation de ma page
  // si je mets pas de [] "tableau dependance" il va etre appelé a chaque fois.
  // si [quantity], appelé la quantity valeur bouge
  // appelé a initialisation et a chaque fois la valeur change
  //
  useEffect(() => {
    return () => console.log("appelée");
  }, [quantity]);
  return (
    <Fragment>
      <button onClick={addOne}>+</button>
      <button>2 +</button>
      <p>{quantity}</p>
      <button onClick={removeOne}>-</button>
    </Fragment>
  );
};

export default QuantityPicket;
