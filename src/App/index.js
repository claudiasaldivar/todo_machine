/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {Fragment} from "react";
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { Formulario } from '../Formulario'
import { TodoCounter } from "../TodoCounter";
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { ChangeAlert } from '../ChangeAlert';

function App() {
  const { 
    states,
    updates
    } = useTodos();

    const {
      error,
      loading,
      totalTodos,
      completedTodos,
      search,
      openModal,
      searchedTodos,
    } = states

    const {
      setSearch,
        setOpenModal,
        completeTodo,
        deleteTodo,
        addTodos,
        sincronize
    } = updates

    
  return(
    <Fragment>
      <TodoHeader
        loading={loading}
      >
      <TodoCounter 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      // loading={loading}
      />
      
      <TodoSearch 
        setSearch={setSearch}
        search={search}
        // loading={loading}
      />
      </TodoHeader>
      

      <TodoList
        searchedTodos={searchedTodos}
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        search={search}
        onError={()=> <p>Error...</p>}
        onLoading={() => <p>Estamos cargando...</p>}
        onEmpty={() => <p>Cree su primer TODO</p>}
        onEmptySearch={(searchText) => <p>No hay resultados para {searchText}</p>}
        // render={todo => (
        //   <TodoItem 
        //     key={ todo.text } 
        //     text={ todo.text }
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {todo => (
          <TodoItem 
            key={ todo.text } 
            text={ todo.text }
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
         </TodoList>
        {!!openModal && (
              <Modal>
              <Formulario 
                setOpenModal={setOpenModal}
                addTodos={addTodos}
              />
            </Modal>
            )}
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      <ChangeAlert 
        sincronize={sincronize}
      />
    </Fragment>
);
}

export default App;
