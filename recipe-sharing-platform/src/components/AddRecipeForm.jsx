import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API or local state)
    console.log({ title, summary, ingredients: ingredients.split('\n'), steps: steps.split('\n') });
    // Clear the form after submission
    setTitle('');
    setSummary('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <a href="/" className="text-blue-500 hover:underline">Home</a> |{' '}
        <a href="/add-recipe" className="text-blue-500 hover:underline">Add Recipe</a>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <label className="block mb-2">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input mt-1 block w-full"
            required
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Summary</span>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="form-textarea mt-1 block w-full"
            rows="2"
            required
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Ingredients (one per line)</span>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="form-textarea mt-1 block w-full"
            rows="4"
            required
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Preparation Steps (one per line)</span>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="form-textarea mt-1 block w-full"
            rows="4"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;

