import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams();
  
  const recipe = data.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-gray-600 mb-4">{recipe.summary}</p>
      
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside">
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Instructions</h2>
      <ol className="list-decimal list-inside">
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
      </ol>
    </div>
  );
};

export default RecipeDetail;
