import React from 'react'
import style from './recipe.module.css'

function Recipe({title, calories, image, ingredients}) {
  return (
    <div className={style.recipe}>
      <img src={image} alt="image" className={style.image} />
      <h1>{title}</h1>
      <p>Cal: {Math.floor(calories)}</p>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Recipe
