import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.render || props.children
    return (
      <section className='TodoList-container'>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmpty()}

        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearch(props.search)}
        {(!props.error && !props.loading) && (props.searchedTodos.map(renderFunc))}
        <ul>
          {props.children}
        </ul>
      </section>
    );
  }
  
  export { TodoList };