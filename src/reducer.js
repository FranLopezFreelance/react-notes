export default function reducer(state, action){
    switch(action.type){
        //Defino las actions
        //Si se agregaga una nota
        case 'ADD_NOTE':
            let newNote = {
                id: state.notes.length + 1,
                text: action.payload.text,
                background: action.payload.color
            }
            let addNotesList = [...state.notes, newNote]
            return {
                ...state,
                notes: addNotesList
            }
        //Si se selecciona una nota para ver su detalle o para editar
        case 'SELECT_NOTE':
            return {
                ...state,
                selectedNote: action.payload
            }
        //Si se actualizan los datos de una nota
        case 'UPDATE_NOTE':
            let updatedNote = {
                ...state.selectedNote,
                text: action.payload.text,
                background: action.payload.color
            }
            console.log(updatedNote)
            let updateNoteIndex = state.notes.findIndex(note => note.id === state.selectedNote.id)
            let updateNotesList = [
                ...state.notes.slice(0, updateNoteIndex),
                updatedNote,
                ...state.notes.slice(updateNoteIndex + 1)
            ]
            let test = {
                ...state,
                selectedNote: updatedNote,
                notes: updateNotesList
            }
            console.log(test)
            return {
                ...state,
                selectedNote: updatedNote,
                notes: updateNotesList
            }
        //Si se elimina una nota
        case 'DELETE_NOTE':
            let deleteNotesList = state.notes.filter(note => note.id !== action.payload)
            return {
                ...state,
                notes: deleteNotesList
            }
        //Si se selecciona un color
        case 'SELECT_COLOR':
            return {
                ...state,
                selectedColor: action.payload
            }
        default:
            return state 
    }
}