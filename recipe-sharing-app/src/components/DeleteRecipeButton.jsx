import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore ((state) => state.deleteRecipe);

    return ( 
        <button onClick={() => deleteRecipe(recipeId)}>
            Detele Recipe
        </button>
    );
};

export default DeleteRecipeButton;