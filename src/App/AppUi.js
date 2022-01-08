import React, { Fragment , useContext} from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { Formulario } from '../Formulario'

function AppUI() {
  const value = useContext(TodoContext)
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = value;
    return(
        <Fragment>
          <TodoCounter />
          
          <TodoSearch />
                <TodoList>
                  {error && <p>Error...</p>}
                  {loading && <p>Estamos cargando...</p>}
                  {(!loading && !searchedTodos.length) && <p>Cree su primer TODO</p>}
                  { searchedTodos.map(todo => (
                  <TodoItem 
                    key={ todo.text } 
                    text={ todo.text }
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                )) }
                </TodoList>
            {!!openModal && (
                  <Modal>
                  <Formulario 
                    setOpenModal={setOpenModal}
                  />
                </Modal>
                )}
          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />
        </Fragment>
    );
}

export { AppUI }