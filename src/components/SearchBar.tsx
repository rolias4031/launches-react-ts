import React, { Dispatch, SetStateAction } from 'react';

interface CompProps {
  raiseState: Dispatch<SetStateAction<string>>;
}

function SearchBar({ raiseState }: CompProps) {
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    raiseState(() => event.target.value);
  }
  return (
    <div className="m-5 text-center">
      <input
        onChange={changeHandler}
        type="text"
        className="w-1/2 p-2 rounded-sm"
      />
    </div>
  );
}

export default SearchBar;
