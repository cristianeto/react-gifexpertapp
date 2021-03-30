import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const GifGrid = ({ category }) => {

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
  }
  return (
    <div>
      <h3>{category}</h3>
    </div>
  )
}

export default GifGrid
