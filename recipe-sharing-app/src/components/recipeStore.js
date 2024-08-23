import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set((state) => ({
    recipes: addEventListener.recipes.filter((recipes) => recipes.id !== id)
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipe.map((recioe) => 
    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  setRecipes: (recipes) => set({ recipes })
}));


export {useRecipeStore};