import Cookies from "js-cookie";

const Favoris = ({ favoris, setFavoris, newFavoris, handleFavoris }) => {
  if (Cookies.get("favoris")) {
    const obj = JSON.parse(Cookies.get("favoris"));
    console.log(obj);
    return (
      <div>
        <p>Je suis la page favoris</p>
        <div>
          {obj.map((fav, index) => {
            return (
              <div>
                <div>
                  <img src={fav.img}></img>
                  <p>{fav.title}</p>
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
