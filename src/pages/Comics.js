import axios from "axios";
import { useState, useEffect } from "react";
import ComicsCard from "../components/ComicsCard";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/comics`);
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
      <ComicsCard data={data} setData={setData} />
    </div>
  );
};

export default Comics;
