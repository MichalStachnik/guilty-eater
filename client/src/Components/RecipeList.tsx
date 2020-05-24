import React from 'react';

interface Props {
  recipes: any[];
}

const RecipeList: React.FC<Props> = ({ recipes }) => {
  console.log('recipes in recipelist', recipes);
  return (
    <div>
      <ul>
        {recipes.map((recipe, index) => {
          return (
            <li key={index}>
              <h1>{recipe.recipe.label}</h1>
              <img src={recipe.recipe.image} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
