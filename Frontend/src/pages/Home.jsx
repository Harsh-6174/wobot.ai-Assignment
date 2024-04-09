import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

function Home() {
  const API_URL = 'https://api.spoonacular.com/recipes/random';
  const API_KEY = '6263f0efe1084d1b9c640522cdf78b77'; 
  const NUMBER_OF_RECIPES = 100;

  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes() {
    try {
      const response = await fetch(`${API_URL}?apiKey=${API_KEY}&number=${NUMBER_OF_RECIPES}`);
      const data = await response.json();
      console.log(data)
      setRecipes(data.recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setRecipes([]);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);


  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipes.map(recipe => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <Product recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
