import { Link } from "react-router-dom";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharactersCard = ({
  data,
  setData,
  nameSearch,
  setNameSearch,
  limit,
  setLimit,
  page,
  setPage,
  favoris,
  setFavoris,
  newFavoris,
  handleFavoris,
}) => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="CharactersCard">
      <div>
        <div className="inputCard">
          <input
            ref={ref}
            className="inputSearch"
            type="search"
            placeholder="Rechercher un personnage"
            value={nameSearch}
            onChange={(event) => {
              setNameSearch(event.target.value);
            }}
          ></input>
        </div>
        <div className="buttonLimit">
          <button
            className={limit === 50 ? "activited" : "unactivited"}
            onClick={(event) => {
              setLimit(50);
            }}
          >
            Afficher 50
          </button>
          <button
            className={limit === 100 ? "activited" : "unactivited"}
            onClick={(event) => {
              setLimit(100);
            }}
          >
            Afficher 100
          </button>
        </div>
      </div>
      <div className="cardParentCharacter">
        {data.results.map((character, index) => {
          const characterId = character._id;
          return (
            <div className="cardContainerCharacter">
              <div className="imgContainerCharacter">
                <Link to={`/comics/${characterId}`}>
                  <img
                    className="imgCharacter"
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    index={index}
                    alt="character"
                  ></img>
                  <div className="textMiddleCharacter">
                    <p className="description">{character.description}</p>
                  </div>
                  <div className="favorisContainer">
                    <button
                      className="favorisButton"
                      onClick={() => {
                        let isPresent = false;
                        for (let i = 0; i < newFavoris.length; i++) {
                          if (newFavoris[i].id === character._id) {
                            isPresent = true;
                          }
                        }
                        if (isPresent === false) {
                          newFavoris.push({
                            img: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                            title: character.name,
                            id: character._id,
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
                </Link>
              </div>
              <div className="nameContainerCharacter">
                <p className="nameCharacter">{character.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {page !== 1 && (
          <button
            onClick={() => {
              setPage(page - 1);
              handleClick();
            }}
          >
            -
          </button>
        )}

        <div>{page}</div>

        <button
          onClick={() => {
            setPage(page + 1);
            handleClick();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CharactersCard;
