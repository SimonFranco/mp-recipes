import React from 'react';
import "./styles.css";
import RecipeCard from "../RecipeCard";

function RecipeContainer() {
  const [recipe] = React.useState([]);
  // return (
  //   <div className='recipe-container'>
  //       {recipe.map((recipe) => (
  //           <RecipeCard  key={recipe.idRecipe} {...recipe}/>
  //       ))}
  //   </div>
  // );
  return (
    <div className='recipe-container'>
      <RecipeCard key={recipe.idRecipe} {...recipe} />
    </div>
  )
}

export default RecipeContainer;