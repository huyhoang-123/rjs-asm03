import { useState, useEffect } from "react";
export function useFetch() {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    setIsFetching(true);
    async function FetchCategory() {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const resData = await response.json();
      setFetchedData(resData);
      setIsFetching(false);
    }
    FetchCategory();
  }, [setIsFetching]);

  return { fetchedData, isFetching };
}
// async function FetchCategory() {
//   const response = await fetch(
//     "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
//   );
//   const resData = await response.json();
//   console.log("fdksfksf");
//   setFetchedData(resData);
// }
// useEffect(() => {
//   FetchCategory();
// }, []);
