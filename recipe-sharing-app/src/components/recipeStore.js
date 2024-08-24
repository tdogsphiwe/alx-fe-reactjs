import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set((state) => ({
    recipes: addEventListener.recipes.filter((recipes) => recipes.id !== id)
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipe.map((recioe) => 
    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  setRecipes: (recipes) => set({ recipes }),
  
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  recommendations: [],
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
 
}));

export {useRecipeStore};