import React, { useState } from 'react';
import LaunchContainer from './components/LaunchContainer';
import LaunchDisplay from './components/LaunchDisplay';
import SearchBar from './components/SearchBar';

function App(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <SearchBar raiseState={setSearchValue} />
      <LaunchContainer>
        <LaunchDisplay contState={searchValue} />
      </LaunchContainer>
    </>
  );
}

export default App;
