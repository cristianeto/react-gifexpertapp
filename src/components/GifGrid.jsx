import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';

//import GifGridItem from './GifGridItem';
//import { getGifs } from './helpers/getGifs';

const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([]);
  const { data, loading } = useFetchGifs();
  console.log(data, loading);
  // useEffect(() => { //Se ejecuta esto cuando el componente se renderiza por 1ra vez
  //   getGifs(category)
  //     .then(imgs => setImages(imgs));
  // }, [category]);

  return (
    <>
      <h3>{category}</h3>
      {loading ? 'Cargando...' : 'Data cargada!'}
      {/* <div className="card-grid">

        {images.map((img) => (
          <GifGridItem
            key={img.id}
            {...img}
          />
        ))
        }

      </div> */}
    </>
  )
}

export default GifGrid
