import React, { useState, useEffect } from 'react';
import data from '../data.json'; 
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
 
    setRecipes(data.recipes);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 shadow-md rounded">
            <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline">
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

