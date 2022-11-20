import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterComics = ({
  data,
  setData,
  favoris,
  setFavoris,
  newFavoris,
  handleFavoris,
}) => {
  return (
    <div className="CharacterComics">
      <div className="cardParent">
        {data.comics.map((comic, index) => {
          return (
            <div className="cardContainer">
              <div className="imgContainer">
                <img
                  className="imgComic"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  index={index}
                  alt="personnage"
                ></img>
                <div className="textMiddle">
                  <p className="description">{comic.description}</p>
                </div>
                <div className="favorisContainer">
                  <button
                    className="favorisButton"
                    onClick={() => {
                      let isPresent = false;
                      for (let i = 0; i < newFavoris.length; i++) {
                        if (newFavoris[i].id === comic._id) {
                          isPresent = true;
                        }
                      }
                      if (isPresent === false) {
                        newFavoris.push({
                          img: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                          title: comic.title,
                          id: comic._id,
                        });
                        setFavoris(newFavoris);
                        console.log(newFavoris);
                        handleFavoris();
                      }
                    }}
                  >
                    <FontAwesomeIcon icon="star" />
                  </button>
                </div>
              </div>
              <div className="titleContainer">
                <p className="title">{comic.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterComics;
