import React, { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {

    const {
        item: todos, 
        loading,
        error, 
        saveItem: saveTodos
      } = useLocalStorage('TODOS_V1', [])
      
      const [search, setSearch] = useState('')
      const [openModal, setOpenModal] = useState(false)
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      
      let searchedTodos = [];
      
      if ( !search.length >= 1 ){
        searchedTodos = todos
      } else {
        searchedTodos = todos.filter((todo) => {
          const todoText = todo.text.toLowerCase()
          const searchText = search.toLowerCase()
      
          return todoText.includes(searchText)
        });
      }
      
      
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
      
        const newTodos = [...todos];
      
        newTodos[todoIndex].completed = true
      
        saveTodos(newTodos)
      
      }

      const addTodos = (text) => {
      
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false
        })
      
        saveTodos(newTodos)
      
      }
      
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
      
        const newTodos = [...todos];
      
        newTodos.splice(todoIndex, 1)
      
        saveTodos(newTodos)
      
      }
      
      // useEffect(() => {
      
      // }, [])
    return(
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            search,
            openModal,
            searchedTodos,
            setSearch,
            setOpenModal,
            completeTodo,
            deleteTodo,
            addTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider}
