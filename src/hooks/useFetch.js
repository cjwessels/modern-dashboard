import { useState, useEffect } from 'react';

// Declaring the custom hook
function useFetch(url, quantity) {
  // Defining state variables
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect to fetch data from the URL and update variables
  useEffect(() => {
    const fetchData = async () => {
      let jsonData = [];
      try {
        for (let index = 0; index < quantity; index++) {
          const response = await fetch(url);
          const json = await response.json();
          jsonData.push(json);
        }
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, quantity]);

  return { data, isLoading, error };
}

export default useFetch;
