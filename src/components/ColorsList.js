import React, { useContext, useState } from 'react'
import NotesContext from '../context'
import Color from './Color'

export default function NotesList({ handleChangeColor, initColor }) {
    //Traigo el state de context
    const { state } = useContext(NotesContext)
    //uso destructuración de arrays para definir variable de estado interno con su seter
    const [selectedColor, setSelectedColor] = useState(initColor)

    //Escucho el cambio de color y lo paso al form
    const changeColor = (color) => {
        setSelectedColor(color)
        handleChangeColor(color)
    }

    return (
        <div className="colors">
            { state.colors.map((color, i) => 
                <Color changeColor={changeColor} color={color} selectedColor={selectedColor} key={i} />
            )}
        </div>
    )
}