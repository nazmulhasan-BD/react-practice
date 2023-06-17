import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header';
import Home from './Home';
import Meal from './component/Meal';
import EachMeal from './component/EachMeal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <p>edkjflsdjlfj;</p>,
    children: [
      {
        path:'home',
        element: <Home></Home>,
      },
      {
        path: 'meal',
        element: <Meal></Meal>,
        loader : ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Fish')        
      },
      {
        path: 'meal/:mealId',
        element: <EachMeal></EachMeal>,
        loader : ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      },
      // this is for error element:
      // {
      //   path: '*',
      //   element: <div> page not found or use a component </div>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
