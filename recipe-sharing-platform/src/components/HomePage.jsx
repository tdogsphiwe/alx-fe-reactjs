import { Link } from 'react-router-dom';
import data from '../data.json';

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {data.map((recipe) => (
        <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={recipe.image} alt={recipe.title} className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>
          <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

