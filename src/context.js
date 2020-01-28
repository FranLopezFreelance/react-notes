import React from 'react'

//Defino el Estado Global de la aplicación
//notes contiene el array de todasl notas agregadas, editNote contiene los valores de la nota editada
const NotesContext = React.createContext({
    notes: [{
        id: 1,
        text: 'Hola Mundo!',
        background: '#EDBBBB'
    }],
    selectedNote: null
})

export default NotesContext
