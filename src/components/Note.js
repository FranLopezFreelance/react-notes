import React, { useContext } from 'react'
import NotesContext from '../context'
import { navigate } from '@reach/router'
import { MdModeEdit, MdDelete } from 'react-icons/md'

export default function Note({ note }) {
    //Vinculo el estado global con las acciones del componente
    const { dispatch } = useContext(NotesContext)

    const selectNote = () => {
        dispatch({ type: 'SELECT_NOTE', payload: note })
        navigate('/note-detail')
    }

    const editAction = () => {
        //Envio accion de edicion y payload (nota a editar) al reducer 
        dispatch({ type: 'SELECT_NOTE', payload: note })
        navigate('/edit')
    }

    const deleteAction = () => {
        if(window.confirm('¿Seguro que quiere eliminar la nota?')) {
            //Envio accion de eliminacion y payload (id nota a eliminar) al reducer 
            dispatch({ type: 'DELETE_NOTE', payload: note.id })
        }
    }

    return (
        <div className="note-container">
            <div className="actions">
                <MdModeEdit className="edit" onClick={editAction} title="Editar Nota" />
                <MdDelete className="del" onClick={deleteAction} title="Eliminar Nota" />
            </div>
            <div title="Ver detalle" onClick={selectNote} className="note" style={{background: note.background}}>
                <p>{(note.text.length > 26) ? note.text.substring(0, 26) + '...' : note.text}</p>
            </div>
        </div>
    )
}
