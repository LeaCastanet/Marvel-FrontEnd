import { Link } from "react-router-dom";
import logoMarvel from "../img/logoMarvel.svg";

const Header = () => {
  return (
    <>
      <div className="Header">
        <Link to="/">
          <div className="imgHeaderContainer">
            <img className="imgHeader" src={logoMarvel}></img>
          </div>
        </Link>
        <div className="HeaderTitle">
          <p>Le site qui regroupe tous vos Comics préférés et leurs Héros</p>
        </div>
      </div>
      <div className="buttonsHeader">
        <Link to="/Characters">
          <button className="buttonHeader">Personnages</button>
        </Link>

        <Link to="/Comics">
          <button className="buttonHeader">Comics</button>
        </Link>

        <Link to="/Favoris">
          <button className="buttonHeader">Favoris</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
