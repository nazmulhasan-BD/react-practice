import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MealDetails = ({ meal }) => {

    const navigete = useNavigate();
    const mealBtn = ()=> {
        navigete(`/meal/${meal.idMeal}`)
    }
    return (
        <div className=' text-left h-full p-4  flex flex-col m-4 border relative rounded-lg  bg-blue bg-opacity-40'>
            <p>Id: {meal.idMeal}</p>
            <p>Name: {meal.strMeal}</p>
            <p>Area: {meal.strArea}</p>
            <button className=' btn btn-primary mt-auto mb-12 w-[64%]'>
                <Link to={`/meal/${meal.idMeal}`}>meal-details</Link>
            </button>
            <button className='btn btn-success absolute bottom-0 mb-2  left-4 ' onClick={mealBtn}>meal-details btn</button>
        </div>
    );
};

export default MealDetails;