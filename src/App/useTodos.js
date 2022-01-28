/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos(props) {

    const {
        item: todos, 
        loading,
        error, 
        sincronize,
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
      
      const states = {
        error,
        loading,
        totalTodos,
        completedTodos,
        search,
        openModal,
        searchedTodos,
      }

      const updates = {
        setSearch,
        setOpenModal,
        completeTodo,
        deleteTodo,
        addTodos,
        sincronize
      }
    return{      
      states,
      updates
    }
}
export { useTodos }
