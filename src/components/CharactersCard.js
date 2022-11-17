import { Link } from "react-router-dom";
import { useRef } from "react";

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
      {data.results.map((character, index) => {
        const characterId = character._id;
        return (
          <div>
            <div>
              <Link to={`/comics/${characterId}`}>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  index={index}
                  alt="comic"
                ></img>
              </Link>
            </div>
            <div>
              <p>Name</p>
              <p>{character.name}</p>
            </div>
            <div>
              <p>Description</p>
              <p>{character.description}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  newFavoris.push({
                    img: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                    title: character.name,
                  });
                  setFavoris(newFavoris);
                  console.log(newFavoris);
                  handleFavoris();
                }}
              >
                Favoris
              </button>
            </div>
          </div>
        );
      })}
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
