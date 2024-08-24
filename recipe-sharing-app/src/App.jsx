import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from "./components/FavoritesList";
import RecommendationList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      <FavoritesList />
      <RecommendationList />
    </div>
  </Router>
  );
};

export default App;
