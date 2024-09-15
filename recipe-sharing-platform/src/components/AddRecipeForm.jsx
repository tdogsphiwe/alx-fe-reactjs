import { useState } from 'react';
import data from '../data.json'; 


const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError('All fields are required.');
      return;
    }

    setError('');

    console.log({ title, ingredients, steps });

    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Recipe</h2>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <label className="block text-gray-700">Recipe Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter recipe title" 
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Ingredients</label>
        <textarea 
          value={ingredients} 
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="List the ingredients" 
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Preparation Steps</label>
        <textarea 
          value={steps} 
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Describe the preparation steps" 
        />
      </div>

      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
