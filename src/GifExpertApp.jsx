import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['goku']);

  /*   const handleAdd = () => {
      //setCategories(['HunterXHunter', ...categories]);
      setCategories(cats => [...categories, 'HunterXHunter']);
    }; */
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, index) => (
          < GifGrid key={category} category={category} />
        )
        )}
      </ol>
    </>
  )
}

export default GifExpertApp
