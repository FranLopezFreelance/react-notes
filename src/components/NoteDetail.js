import React, { useContext } from 'react'
import NotesContext from '../context'
import { Link } from '@reach/router'
import { MdKeyboardBackspace } from 'react-icons/md'

export default function NoteDetail(){
    //Obtengo el state global de context
    const { state } = useContext(NotesContext)

    return (
        <div>
            <Link to="/" className="return"><MdKeyboardBackspace  title="Volver" /></Link>
            <div className="note-detail" style={{background: state.selectedNote.background}}>
                <p>{state.selectedNote.text}</p>
            </div>
        </div>
    )
}
    