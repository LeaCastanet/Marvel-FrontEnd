const ComicsCard = ({ data, setData }) => {
  return (
    <div className="ComicsCard">
      {data.results.map((comic, index) => {
        return (
          <div>
            <div>
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                index={index}
              ></img>
            </div>
            <div>
              <p>Title</p>
              <p>{comic.title}</p>
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

export default ComicsCard;
