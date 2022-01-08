import React, { useContext } from 'react'; 
import {TodoContext} from '../TodoContext'
import './TodoSearch.css';


function TodoSearch() {
  const value = useContext(TodoContext)
  const {setSearch, search} = value
  const onSearchValueChange = (e) => {
    setSearch(e.target.value)
  }

    return [
      <input className="TodoSearch" placeholder="Cebolla" onChange={onSearchValueChange} value={search}/>,
      <p>{search}</p>
    ]
    ;
  }
  
  export { TodoSearch };