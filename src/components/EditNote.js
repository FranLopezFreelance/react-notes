import React, { useContext, useState, useRef, useEffect } from 'react'
import NotesContext from '../context'
import ColorsList from './ColorsList.js'
import { navigate, Link } from '@reach/router'
import { MdDone, MdKeyboardBackspace } from 'react-icons/md'

export default function EditNote(){
    //Vinculo el estado global con las acciones y valores del componente
    const { state, dispatch } = useContext(NotesContext)
    //Uso “desestructuración de arrays” para setear el valor de text y color en el state
    const [ text, setText ] =  useState(state.selectedNote.text)
    const [ color, setColor ] = useState(state.selectedNote.background)

    //Preparo el ref para definir el elemente de referencia
    let ref = useRef()

    //Hago foco en el textarea (ref)
    useEffect(() => {
        ref.current.focus()
    }, [])

    //Pongo el cursor al final del texto a editar
    const moveCaretAtEnd = (event) => {
        let temp_value = event.target.value
        event.target.value = ''
        event.target.value = temp_value
    }

    //Handle de cambios del text, color y click del submit
    const handleChangeText = (event) => {
        setText(event.target.value)
    }

    const handleChangeColor = (color) => {
        setColor(color)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(text.trim() === ''){
            //Si el campo está vacío...
            alert('La nota no puede quedar sin texto')
        }else{
            //Si se completó correctamente envío la acción y el payload para trabajar en el reducer
            dispatch({ type: 'UPDATE_NOTE', payload: { text, color } })
            navigate('/')
        }
    }

    return (
        <div className="formNote">
            <ColorsList handleChangeColor={handleChangeColor} initColor={color} />
            <form onSubmit={handleSubmit} action="">
                <textarea
                    style={{background: color}} 
                    rows="7"
                    ref={ref} 
                    placeholder="Editar Nota"
                    value={text}
                    onChange={handleChangeText}
                    onFocus={moveCaretAtEnd}>
                </textarea>
                <button className="add-button" title="Guardar"><MdDone /></button>
                <Link to="/" className="return"><MdKeyboardBackspace  title="Volver" /></Link>
            </form>
        </div>
    )
}
