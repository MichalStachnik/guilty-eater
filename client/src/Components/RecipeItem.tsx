import React, { useState } from 'react';

interface Props {
  recipe: {
    calories: number;
    cautions: string[];
    dietLabels: string[];
    healthLabels: string[];
    image: string;
    ingredientLines: string[];
    ingredients: any[];
    label: string;
    shareAs: string;
    source: string;
    totalDaily: string;
    totalNutrients: any;
    totalTime: number;
    totalWeight: number;
    uri: string;
    url: string;
  };
}

const RecipeItem: React.FC<Props> = ({ recipe }) => {
  let [ingredients, setIngredients] = useState(['']);
  console.log('recipe in recipe item', recipe);

  const handleRecipeClick = () => {
    // Get ingredients
    let ingredients = recipe.ingredientLines
      .map((ingredientLine) => ingredientLine.split(' '))
      .flat();

    console.log('ingredients', ingredients);

    // Strip numbers and measurements
    ingredients = ingredients.filter(
      (ingredient) =>
        !Number(ingredient[0]) &&
        !ingredient.includes('lbs.') &&
        !ingredient.includes('lb.')
    );

    console.log('ingredients after stripping numbers', ingredients);
    setIngredients(ingredients);
  };

  const checkForGuilty = () => {
    console.log('checking for guilty against graphql');
  };

  return (
    <li onClick={handleRecipeClick}>
      <h1>{recipe.label}</h1>
      <img src={recipe.image} />
      <button onClick={checkForGuilty}>Check for guilty</button>
    </li>
  );
};

export default RecipeItem;
