import style from "./Header.module.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className={style.wrapper}>
      <a href="#">
        <h1 className={style.title}> 🌱 Bergamotte </h1>
      </a>
      <Nav />
    </header>
  );
};

export default Header;
