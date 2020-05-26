import React from 'react';
import RecipeItem from './RecipeItem';

interface Props {
  recipes: any[];
}

const RecipeList: React.FC<Props> = ({ recipes }) => {
  console.log('recipes in recipelist', recipes);
  return (
    <div>
      <ul>
        {recipes.map((recipe, index) => {
          return <RecipeItem recipe={recipe.recipe} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
