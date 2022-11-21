import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComicsCard = ({
  data,
  setData,
  titleSearch,
  setTitleSearch,
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
    <div className="ComicsCard">
      <div>
        <div className="inputCard">
          <input
            ref={ref}
            className="inputSearch"
            type="search"
            placeholder="Rechercher un comic"
            value={titleSearch}
            onChange={(event) => {
              setTitleSearch(event.target.value);
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
      <div className="cardParent">
        {data.results.map((comic, index) => {
          return (
            <div className="cardContainer">
              <div className="imgContainer">
                <img
                  className="imgComic"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  index={index}
                  alt="image comic"
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
        ;
      </div>
      <div className="pagination">
        {page !== 1 && (
          <button
            className="buttonPage"
            onClick={() => {
              setPage(page - 1);
              handleClick();
            }}
          >
            Previous
          </button>
        )}

        <div className="pageNumber">{page}</div>

        <button
          className="buttonPage"
          onClick={() => {
            setPage(page + 1);
            handleClick();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ComicsCard;
