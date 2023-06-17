import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealDetails from './MealDetails';

const Meal = () => {
    const mealsData = useLoaderData();
    const meals = mealsData.meals
    return (
        <div>
            <p className='text-4xl mb-4 font-lobstar font-bold'> This is meal db {meals.length}</p>
            <div className='grid grid-cols-3 gap-5 border h-full my-container'>
                {
                    meals.map(meal => <MealDetails
                        key={meal.idMeal}
                        meal={meal}
                    ></MealDetails>)
                }
            </div>
        </div>
    );
};

export default Meal;