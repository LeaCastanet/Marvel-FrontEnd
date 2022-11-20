import Cookies from "js-cookie";

const Favoris = ({ favoris, setFavoris, newFavoris, handleFavoris }) => {
  if (Cookies.get("favoris")) {
    const obj = JSON.parse(Cookies.get("favoris"));
    console.log(obj);
    return (
      <div className="FavorisCard">
        <div className="cardParent">
          {obj.map((fav, index) => {
            return (
              <div className="cardContainer">
                <div className="imgContainer">
                  <img className="imgFav" src={fav.img}></img>
                </div>
                <div className="titleContainer">
                  <p className="titleFav">{fav.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Favoris;
