import axios from "axios";
import { useState, useEffect } from "react";
import CharactersCard from "../components/CharactersCard";

const Characters = ({ favoris, setFavoris, newFavoris, handleFavoris }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [nameSearch, setNameSearch] = useState("");
  const [limit, setLimit] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--backend-marvel--zq5xy57wvjfd.code.run/characters?name=${nameSearch}&limit=${limit}&page=${page}`
      );
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [nameSearch, limit, page]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <CharactersCard
        data={data}
        setData={setData}
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
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

export default Characters;
