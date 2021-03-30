import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import GifGridItem from './GifGridItem';
import { getGifs } from './helpers/getGifs';

const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => { //Se ejecuta esto cuando el componente se renderiza por 1ra vez
    getGifs(category)
      .then(imgs => setImages(imgs));
  }, [category]);

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
