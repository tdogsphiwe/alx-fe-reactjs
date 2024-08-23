import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from "./recipeStore";

    const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate();
  
    const handleDelete = () => {
      deleteRecipe(recipeId);
      navigate('/');
    };
    return ( 
        <button onClick={() => deleteRecipe(recipeId)}>
            Detele Recipe
        </button>
    );
};

export default DeleteRecipeButton;