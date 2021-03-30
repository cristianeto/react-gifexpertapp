import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => { //Se ejecuta esto cuando el componente se renderiza por 1ra vez
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = "https://api.giphy.com/v1/gifs/search?limit=10&q=Rick ann morty&api_key=CTultUNDaOlOTkVSr2pou3ItXZVBWFxZ";
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    })
    console.log(gifs);
    setImages(gifs);
  }
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">

        {images.map((img) => (
          <GifGridItem
            key={img.id}
            {...img}
          />
        ))
        }

      </div>
    </>
  )
}

export default GifGrid
