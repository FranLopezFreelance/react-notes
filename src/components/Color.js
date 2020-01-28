import React from 'react'

export default function Color({ changeColor, color, selectedColor }) {

    //Escucho el cambio de color y lo paso a la lista de colores
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
