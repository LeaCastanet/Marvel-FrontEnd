import axios from "axios";
import { useState, useEffect } from "react";
import CharactersCard from "../components/CharactersCard";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/characters`);
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <CharactersCard data={data} setData={setData} />
    </div>
  );
};

export default Characters;
