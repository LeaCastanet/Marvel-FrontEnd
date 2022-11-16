import { Link } from "react-router-dom";

const CharactersCard = ({ data, setData }) => {
  return (
    <div className="CharactersCard">
      {data.results.map((character, index) => {
        const characterId = character._id;
        return (
          <div>
            <div>
              <Link to={`/comics/${characterId}`}>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
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
          </div>
        );
      })}
    </div>
  );
};

export default CharactersCard;
