import React from 'react'

export default function Color({ changeColor, color, selectedColor }) {

    //Función para setear el state al seleccionar el color
    const selectColor = (color) => {
        changeColor(color)
    }

    return (
        <span 
            onClick={() => selectColor(color.hex)} 
            className={color.name + " color " + ((selectedColor===color.hex)? "selected":"")}>
        </span>
    )
}
