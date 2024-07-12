import { useState, useEffect } from "react";
import axios from "axios";

 export const useFetch = ({ endpoint, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    hostname: "jsearch.p.rapidapi.com",
    headers: {
      "x-rapidapi-key": 'a1a1a6e34fmsh70a7780fb3094b7p13d2ebjsn63cbecc06269',
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const reponse = await axios.request(options);
      setData(reponse.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch =  () =>{
   setIsLoading(true);
   fetchData();
  }
  return {data, isLoading, error, refetch};
};

// export default useFetch;