/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue){

    const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}))

    const {
      loading,
      error,
      item,
      sincorized
    } = state

    const onError = (error) => dispatch({type: actionTypes.error, payload: error});    
    const onSuccess = (parseItem) => dispatch({type: actionTypes.success,payload: parseItem});
    const onSave = (newItem) => dispatch({type: actionTypes.save, payload: newItem});
    const onSincronize = () => dispatch({type: actionTypes.sincronize})
  
    useEffect(() => {
      try {
        setTimeout(() => {
          const localStorageItem = localStorage.getItem(itemName);
    
          let parseItem;
          
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parseItem = initialValue
          }else{
            parseItem = JSON.parse(localStorageItem)
          }
          onSuccess(parseItem)
        }, 2000)
      } catch (error) {
        onError(error)
      }
    }, [sincorized])
    
  
    const saveItem = (newItem) => {
     try {
      const stringifyItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifyItem)
      onSave(newItem)
     } catch (error) {
      onError(error)
     }
    }

    const sincronize = () => {
      onSincronize()
    }

    return {
      item,
      saveItem,
      loading, 
      error,
      sincronize
    }
  }

  const initialState = ({initialValue}) =>({
    loading: true,
    error : false,
    item : initialValue,
    sincorized : true 
  });

  const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE'
  }

  const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
      ...state,
      error: true
    },
    [actionTypes.success]:{
      ...state,
      error: false,
      sincorized: true,
      loading: false,
      item: payload
    },
    [actionTypes.save]:{
      ...state,
      error: false,
      sincorized: true,
      loading: false,
      item: payload
    },
    [actionTypes.sincronize]:{
      ...state,
      loading: true,
      sincorized: false,
      error: false
    }
  })

  const reducer = (state, action) => {
   return (reducerObject(state, action.payload)[action.type]) || state;
  }

export { useLocalStorage }