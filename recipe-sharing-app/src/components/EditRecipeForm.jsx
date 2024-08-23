import { usestate } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
    const uodateRecipe = useRecipeStore((state) => state,updateRecipe);
    const [title, setTittle] = usestate(recipe.title);
    const [description, setDescription] = usestate(recipe.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({...recipe , title , description });
    };

  return (
   <form onSubmit="{handleSubmit">
    <input 
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Title"
    />
    <textarea 
    value={description}
    onChange={(e) => description(e.target.value)}
    placeholder="Description"
    />
    <button type="submit"></button>

   </form>
  );
};

export default EditRecipeForm;