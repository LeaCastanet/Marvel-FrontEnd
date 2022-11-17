import axios from "axios";
import { useState, useEffect } from "react";
import ComicsCard from "../components/ComicsCard";

const Comics = ({ favoris, setFavoris, newFavoris, handleFavoris }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [titleSearch, setTitleSearch] = useState("");
  const [limit, setLimit] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/comics?title=${titleSearch}&limit=${limit}&page=${page}`
      );
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [titleSearch, limit, page]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <ComicsCard
        data={data}
        setData={setData}
        titleSearch={titleSearch}
        setTitleSearch={setTitleSearch}
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        favoris={favoris}
        setFavoris={setFavoris}
        newFavoris={newFavoris}
        handleFavoris={handleFavoris}
      />
    </div>
  );
};

export default Comics;
