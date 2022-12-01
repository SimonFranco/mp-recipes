import {useEffect, useState} from 'react';
import Jumbo from '../../components/Jumbo';
import axios from 'axios';
import RecipeContainer from '../../components/RecipeContainer';
import React, { useContext }  from 'react';
import { MyContext } from '../../context';


function Home() {
  const {meals, setMeals} = useContext(MyContext);
  const [searchInput] = useState("");
  useEffect(() =>{
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
          .then(({data}) => setMeals(data.meals))
          .catch((error) => console.log(error));
      },[]);
  return (
    <div>
        <Jumbo /> 
        <RecipeContainer meals={meals} />
    </div>
  )
}

export default Home;