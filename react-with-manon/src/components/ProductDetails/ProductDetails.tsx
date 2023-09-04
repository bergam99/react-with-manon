import "./ProductDetails.css";
import Button from "../Button/Button";
import ButtonResuse from "../ButtonReuse/ButtonResuse";

const ProductDetails = () => {
  const Products = [
    {
      id: 1,
      title: "pomme",
      price: 11,
      details: "details de pomme",
      imgUrl: "public/img/pomme.png",
      isAvailable: true,
    },
    {
      id: 2,
      title: "bananes",
      price: 12,
      details: "details de bananas",
      imgUrl: "public/img/banana.png",
      isAvailable: true,
    },
    {
      id: 3,
      title: "ananas",
      price: 10,
      details: "details de ananas",
      imgUrl: "public/img/ananas.png",
      isAvailable: false,
    },
    {
      id: 4,
      title: "pêche",
      price: 8,
      details: "details de pêche",
      imgUrl: "public/img/peche.png",
      isAvailable: false,
    },
    {
      id: 5,
      title: "kiwi",
      price: 4,
      details: "details de kiwi",
      imgUrl: "public/img/kiwi.png",
      // require("assets/img/Photo hero.png");
      isAvailable: true,
    },
  ];
  const see = () => console.log("voir plus");

  return (
    <section>
      {Products.map((product) => (
        <article key={product.id} className="ProductDetails__ProductCards">
          <img
            className="ProductDetails__img"
            src={product.imgUrl}
            alt={product.title}
          />
          <div className="ProductDetails__des">
            <h2>{product.title}</h2>
            <br />
            <b>{product.price} € </b>
            <br />
            <p>Details :{product.details}</p> <br />
            {/* {product.isAvailable === true && <Button />} */}
            {product.isAvailable ? <Button /> : "❌ produit indisponible"}
            <ButtonResuse title="voir plus" callback={see} />
          </div>
        </article>
      ))}
    </section>
  );
};

export default ProductDetails;
