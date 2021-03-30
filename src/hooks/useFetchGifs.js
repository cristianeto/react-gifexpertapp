import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => { //Se ejecuta esto cuando el componente se renderiza por 1ra vez
    getGifs(category)
      .then(imgs => {
        setState({
          data: imgs,
          loading: false,
        });

      });
  }, [category]);

  return state; //{data:[], loading: true}
}

export default useFetchGifs
