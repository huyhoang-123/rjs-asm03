import { useState, useEffect } from "react";
export function useFetch() {
  const [fetchedData, setFetchedData] = useState([]);
  //   useEffect(() => {
  //     async function FetchCategory() {
  //       const response = await fetch(
  //         "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  //       );
  //       const resData = await response.json();
  //       console.log(resData);
  //       setFetchedData(resData);
  //     }
  //     FetchCategory();
  //   }, []);
  async function FetchCategory() {
    const response = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
    const resData = await response.json();
    console.log("fdksfksf");
    setFetchedData(resData);
  }
  useEffect(() => {
    FetchCategory();
  }, []);
  return fetchedData;
}
