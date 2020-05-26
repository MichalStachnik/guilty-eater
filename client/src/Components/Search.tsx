import React, { useState } from 'react';

interface Props {
  handleSearchChange: Function;
}

const App: React.FC<Props> = ({ handleSearchChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchChange(searchValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Enter a recipe..."
      />
      <button>Search</button>
    </form>
  );
};

export default App;
