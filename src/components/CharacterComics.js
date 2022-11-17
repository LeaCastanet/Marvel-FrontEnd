const CharacterComics = ({ data, setData }) => {
  return (
    <div className="CharacterComics">
      {data.comics.map((comic, index) => {
        return (
          <div>
            <div>
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                index={index}
                alt="personnage"
              ></img>
            </div>
            <div>
              <p>title</p>
              <p>{comic.name}</p>
            </div>
            <div>
              <p>Description</p>
              <p>{comic.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterComics;
