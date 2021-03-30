import React from 'react'

const GifGrid = ({ category }) => {

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

  getGifs();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  )
}

export default GifGrid
