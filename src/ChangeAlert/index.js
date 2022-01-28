import React from 'react';
import { useStorageListener} from './useStorageListened';

function ChangeAlert({sincronize}){

    const {show, toggleShow} = useStorageListener(sincronize)
    if(show){
        return (
            <div>
                <p>Hubo cambios</p>
                <button 
                    type='button'
                    onClick={() => toggleShow(false)}
                >Refrescar la app</button>
            </div>
        )
    }else {
        return null
    }
}

export { ChangeAlert }