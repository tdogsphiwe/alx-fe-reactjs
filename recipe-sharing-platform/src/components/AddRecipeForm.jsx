import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState({ name: '', description: '', ingredients: '', instructions: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!recipe.name) newErrors.name = 'Name is required';
    if (!recipe.description) newErrors.description = 'Description is required';
    if (!recipe.ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!recipe.instructions) newErrors.instructions = 'Instructions are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Recipe submitted:', recipe);
      // You can add logic to save the recipe here
    }
  };

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold mb-4">Add a New Recipe</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          name="description"
          value={recipe.description}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-medium">
          Ingredients
        </label>
        <textarea
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="instructions" className="block text-sm font-medium">
          Instructions
        </label>
        <textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
        />
        {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;

