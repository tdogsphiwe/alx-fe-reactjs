import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!summary.trim()) newErrors.summary = 'Summary is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Handle form submission (e.g., send data to API or local state)
    console.log({ title, summary, ingredients: ingredients.split('\n'), steps: steps.split('\n') });
    // Clear the form after submission
    setTitle('');
    setSummary('');
    setIngredients('');
    setSteps('');
    setErrors({});
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
            className={`form-input mt-1 block w-full ${errors.title ? 'border-red-500' : ''}`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Summary</span>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className={`form-textarea mt-1 block w-full ${errors.summary ? 'border-red-500' : ''}`}
            rows="2"
          />
          {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Ingredients (one per line)</span>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`form-textarea mt-1 block w-full ${errors.ingredients ? 'border-red-500' : ''}`}
            rows="4"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Preparation Steps (one per line)</span>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`form-textarea mt-1 block w-full ${errors.steps ? 'border-red-500' : ''}`}
            rows="4"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
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
