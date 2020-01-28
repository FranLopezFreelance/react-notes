import React, { useContext, useReducer } from 'react'
import NotesContext from './context'
import NotesReducer from './reducer'
import { Router } from '@reach/router'
import Header from './components/Header'
import NotesList from './components/NotesList'
import NoteDetail from './components/NoteDetail'
import AddNote from './components/AddNote'
import EditNote from './components/EditNote'

import './App.css'

function App() {
  //Seteo un estado inicial de la aplicacion y Preparo el manejo de estados globales
  const initialState = useContext(NotesContext)
  const [state, dispatch] = useReducer(NotesReducer, initialState)

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <Header />
      <Router>
        <NotesList path='/' />
        <NoteDetail path='/note-detail' />
        <AddNote path='/add' />
        <EditNote path='/edit' />
      </Router>
      
    </NotesContext.Provider>
  )
}

export default App
