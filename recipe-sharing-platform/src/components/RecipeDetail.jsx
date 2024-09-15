import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{recipe.name}</h1>
      <p className="mb-4">{recipe.description}</p>
      <h2 className="text-xl font-bold mb-2">Ingredients</h2>
      <p className="mb-4">{recipe.ingredients}</p>
      <h2 className="text-xl font-bold mb-2">Instructions</h2>
      <p className="mb-4">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;

