import React, {useContext, useState} from 'react';
import { TodoContext } from '../TodoContext'
import './form.css'

function Formulario(){
    const [text, setText] = useState('')
    const value = useContext(TodoContext)
    const {addTodos, setOpenModal} = value 

    const onWrite = (e) => {
        setText(e.target.value)
    }

    const onCancel = () => {
        setText('')
        setOpenModal(prevState => !prevState)
    }

    const onAñadir = (e) => {
        e.preventDefault() 
        addTodos(text)
        setOpenModal(prevState => !prevState)
    }

    return (
        <form onSubmit={onAñadir}>
            <label className='labelItem'>Escribe tu nuevo To Do</label>
            <textarea 
                onChange={onWrite}
                value={text}
                placeholder='Cortar la cebolla'
            />
            <div className='TodoForm-buttonContainer'>
            <button onClick={onCancel} type='button' className='TodoForm-button TodoForm-button-cancel'>Cancelar</button>
            <button type='submit' className='TodoForm-button TodoForm-button-add'>Añadir</button>
            </div>
        </form>
    )
}

export { Formulario }