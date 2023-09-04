import "./Nav.css";

const Nav = () => {
  const NavLi = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Produits", link: "/" },
    { id: 3, title: "A Propos", link: "/" },
    { id: 4, title: "Contact", link: "/" },
    { id: 5, title: "🛍️", link: "/" },
  ];

  // const title = "Home";
  // const orderNumber = 2020;
  // const productOfList = 2;
  // const message = orderNumber && <p>message {orderNumber}</p>;

  // const ProductList = [
  //   {
  //     id: 1,
  //     title: "snack",
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     title: "icecream",
  //     price: 44,
  //   },
  // ];
  return (
    <nav className="Nav">
      {/* {title.toUpperCase()} {orderNumber} {4 + 1}
      {orderNumber ? <p>here {orderNumber}</p> : null}
      {orderNumber ? `numero est ${orderNumber}` : "pas de commande"}
      {message}
      {productOfList > 0 && (
        <p>
          <ul>
            <li>salade</li>
            <li>tomate</li>
            <li>oignons</li>
          </ul>
        </p>
      )} */}
      <ul className="Nav__ul">
        {NavLi.map((nav) => (
          <li key={nav.id}>
            <a href="{nav.link}">{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
