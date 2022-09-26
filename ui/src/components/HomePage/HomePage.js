import React, { useContext, useCallback, useState } from "react";
import { myContext } from "../context/context";
import "./HomePage.scss";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchHomePageMeals, meals } = useContext(myContext);
  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);

  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="Type a meal name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>
      <div className="home-grid">
        {meals ? (
          meals.map((meal) => (
            <div className="home-meal" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#" />
              <h4>{meal.strMeal}</h4>
            </div>
          ))
        ) : (
          <h2>No Meals found! Try another words</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
