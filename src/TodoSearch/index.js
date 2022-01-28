import React from 'react'; 
import './TodoSearch.css';

function TodoSearch({setSearch, search, loading}) {
  const onSearchValueChange = (e) => {
    setSearch(e.target.value)
  }

    return [
      <input 
        className="TodoSearch" 
        placeholder="Cebolla"
        onChange={onSearchValueChange} 
        value={search} 
        disabled={loading}/>,
      <p>{search}</p>
    ]
    ;
  }
  
  export { TodoSearch };