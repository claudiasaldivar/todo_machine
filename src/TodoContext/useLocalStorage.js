import React, { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue)
  
  
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
          setItem(parseItem)
          setLoading(false)
        }, 2000)
      } catch (error) {
        setError(true)
      }
    })
    
  
    const saveItem = (newItem) => {
     try {
      const stringifyItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifyItem)
    
      setItem(newItem)
     } catch (error) {
      setError(true)
     }
    }
    return {
      item,
      saveItem,
      loading, 
      error
    }
  }

export { useLocalStorage }