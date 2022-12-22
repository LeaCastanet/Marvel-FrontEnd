import axios from "axios";
import { useState, useEffect } from "react";

import ComicsCard from "../components/ComicsCard";
import CustomLoader from "../components/CustomLoader";

const Comics = ({ favoris, setFavoris, newFavoris, handleFavoris }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [titleSearch, setTitleSearch] = useState("");
  const [limit, setLimit] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--backend-marvel--zq5xy57wvjfd.code.run/comics?title=${titleSearch}&limit=${limit}&page=${page}`
      );
      setData(response.data);
      // console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [titleSearch, limit, page]);

  return isLoading ? (
    <CustomLoader />
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
