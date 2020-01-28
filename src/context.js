import React from 'react'

//Defino el Estado Global de la aplicación
//notes contiene el array de todasl notas agregadas, editNote contiene los valores de la nota editada
const NotesContext = React.createContext({
    notes: [],
    selectedNote: null,
    colors: [
        { name: 'white', hex: '#FFFFFF' },
        { name: 'red', hex: '#EDBBBB' },
        { name: 'orange', hex: '#EAD2BF' },
        { name: 'yellow', hex: '#EDECBB' },
        { name: 'green', hex: '#C8EBBF' },
        { name: 'blue', hex: '#BBD0ED' }
    ]
})

export default NotesContext
