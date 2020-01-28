import React, { useContext } from 'react'
import NotesContext from '../context'
import Note from './Note'

export default function NotesList() {
    //Vinculo el estado global con el componente
    const { state } = useContext(NotesContext)
    return (
        <div className="notes-list">
            { state.notes.map((note, i) => <Note note={note} key={i} />) }
        </div>
    )
}