import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch', 'Samurai', 'Dragon Ball']);

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
        {
          categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp
