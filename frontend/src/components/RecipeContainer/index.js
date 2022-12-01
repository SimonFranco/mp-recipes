import React from 'react';
import "./styles.css";
import RecipeCard from "../RecipeCard";
// import RecipeModal from '../RecipeModal';

function RecipeContainer({ meals }) {
  // const [meals] = React.useState([]);
  return (
    <div className='recipe-container row-cols-3 p-2 m-1' >
      {meals.map((meal) => (
        <RecipeCard {...meal} />
      // <RecipeCard key={meal.idMeal} {...meals} />
      ))}
    </div>
  )
}

export default RecipeContainer;