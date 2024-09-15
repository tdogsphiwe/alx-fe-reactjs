import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link> |{' '}
        <Link to="/add-recipe" className="text-blue-500 hover:underline">Add Recipe</Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;


