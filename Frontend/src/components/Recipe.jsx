import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeDetails(id);
  }, [id]);

  const fetchRecipeDetails = async (id) => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6263f0efe1084d1b9c640522cdf78b77`);
      const data = await response.json();
      setRecipe(data); 
      console.log(data)
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  if (!recipe) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Recipe Details</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 mx-3">{recipe.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={recipe.image} alt={recipe.title} className="w-full h-auto mx-2" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc ml-6">
            {recipe.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-4">Instructions:</h3>
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
