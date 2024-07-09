import React from 'react';
import { TodoContext } from '../TodoContext';

import './TodoSearch.css';

function TodoSearch() {

    const {
        searchValue,
        setSearchValue,
      } = React.useContext(TodoContext);

    return (
        <input className = "TodoSearch"
        value = {searchValue} 
        placeholder="Cortar cebolla"
        onChange={(event) => {
            setSearchValue(event.target.value);
        }} />
    );
  }

  export{ TodoSearch };