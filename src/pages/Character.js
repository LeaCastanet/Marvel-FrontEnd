import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterComics from "../components/CharacterComics";

const Character = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--backend-marvel--zq5xy57wvjfd.code.run/comics/${characterId}`
      );
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <CharacterComics data={data} setData={setData} />
    </div>
  );
};

export default Character;
