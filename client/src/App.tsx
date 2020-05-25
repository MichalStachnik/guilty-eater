import React, { useState, useEffect } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

import Search from './Components/Search';
import RecipeList from './Components/RecipeList';

const FOODS = gql`
  {
    foods {
      type
      landUseChange
    }
  }
`;

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipe = async () => {
    let url = `https://api.edamam.com/search?q=${searchQuery}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('our data', data);
    setRecipes(data.hits);
  };

  const handleSearchChange = (searchValue: string) => {
    setSearchQuery(searchValue);
  };

  useEffect(() => {
    if (!searchQuery) return;
    fetchRecipe();
    console.log('useEffect ran');
  }, [searchQuery]);

  const { loading, error, data } = useQuery(FOODS);

  console.log('loading ', loading);
  console.log('error ', error);
  console.log('data ', data);

  let renderedData;

  if (data && data.foods.length) {
    renderedData = data.foods.map((food: any, index: number) => {
      return <p>{food.type}</p>;
    });
  }
  return (
    <div>
      <Search handleSearchChange={handleSearchChange} />
      <RecipeList recipes={recipes} />
      {renderedData}
    </div>
  );
};

export default App;
