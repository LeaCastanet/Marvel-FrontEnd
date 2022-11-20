import { Link } from "react-router-dom";
import logoMarvel from "../img/logoMarvel.svg";
import logoInsta from "../img/logoInsta.png";
import logoYouTube from "../img/logoYouTube.png";
import logoTwitter from "../img/logoTwitter.png";

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="logoHeaderContainer">
          <a href="https://www.instagram.com/marvel/">
            <div>
              <img className="logoHeader" src={logoInsta}></img>
            </div>
          </a>
          <a href="https://www.youtube.com/marvel">
            <div>
              <img className="logoHeader" src={logoYouTube}></img>
            </div>
          </a>
          <a href="https://twitter.com/marvel">
            <div>
              <img className="logoHeader" src={logoTwitter}></img>
            </div>
          </a>
        </div>
        <div className="imgHeaderContainer">
          <Link to="/">
            <div>
              <img className="imgHeader" src={logoMarvel}></img>
            </div>
          </Link>
        </div>
        <div className="boutHeader"></div>

        {/* <div className="HeaderTitle">
          <p>Le site qui regroupe tous vos Comics préférés et leurs Héros</p>
        </div> */}
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
