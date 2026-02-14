import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([])
  const [query, setQuery] = useState('goa')

  const apiKey =  import.meta.env.VITE_PIXABAY_API_KEY;

  useEffect(() => {
    const fetchApiData = async ()=> {
      const apiUrl = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true&per_page=100`)
      const data = await apiUrl.json();
      setImageData(data.hits)
    }
    fetchApiData();  
  }, [query]);

  const fetchApiByCategory = async (cat)=> {
    const fetchApiData = async ()=> {
      const apiUrl = await fetch(`https://pixabay.com/api/?key=${apiKey}&category=${cat}&image_type=photo&pretty=true&per_page=100`)
      const data = await apiUrl.json();
      setImageData(data.hits)
    }
    fetchApiData();
  };

  return (
    <PixabayContext.Provider value={{imageData, fetchApiByCategory, setQuery}}>
      {props.children}
    </PixabayContext.Provider>
  );
};


export default PixabayState;
