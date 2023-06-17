import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EachMeal = () => {
    const { meals } = useLoaderData();
    const meal = meals[0];

    const navigate = useNavigate();
    const handleBack= ()=>{
        navigate(-1);
    }

    return (
        <div className='  text-4xl font-bold border-2 border-blue inline-block p-4 bg-green '>
            <img src={meal.strMealThumb} className='w-[600px] h-[300px] object-cover mb-4' alt="" />
            <p className='mb-3 '>Id: {meal.idMeal}</p>
            <p className='mb-3 text-2xl'>Name: {meal.strMeal}</p>
            <p className='text-2xl'>Area: {meal.strArea}</p>
            <button className=' btn btn-primary' onClick={handleBack}>
                back
            </button>
        </div>
    );
};

export default EachMeal;