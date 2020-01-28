import React, { useContext, useState, useRef, useEffect } from 'react'
import NotesContext from '../context'
import { navigate, Link } from '@reach/router'
import { MdDone, MdKeyboardBackspace } from 'react-icons/md'

export default function AddNote() {
    //Vinculo el estado global con las acciones y valores del componente
    const { dispatch } = useContext(NotesContext)
    //Uso “desestructuración de arrays” para setear el valor de text y color en el state
    const [ text, setText ] = useState('')
    const [ color, setColor ] = useState('#EDBBBB')

    //Preparo el ref para definir el elemente de referencia
    let ref = useRef();

    //Hago foco en el textarea (ref)
    useEffect(() => {
        ref.current.focus();
    }, [])

    //Función para setear el state al seleccionar el color
    function selectColor(selectedColor, id){
        setColor(selectedColor)
    }

    //Handle de cambios del text, color y click del submit
    const handleChangeText = (event) => {
        setText(event.target.value)
    }
    
    const handleChangeColor = (event) => {
        setColor(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(text.trim() === ''){
            //Si el campo está vacío... 
            alert('No se puede agregar una nota sin texto')
        }else{
            //Si se completó correctamente envío la acción y el payload para trabajar en el reducer
            dispatch({ type: 'ADD_NOTE', payload: { text, color }})
            navigate('/')
        }
    }

    return (
        <div className="formNote">
            <div className="colors">
                <span onClick={() => selectColor('#EDBBBB')} 
                    className={"red color " + ((color==='#EDBBBB')? "selected":"")}></span>
                <span onClick={() => selectColor('#EAD2BF')} 
                    className={"orange color " + ((color==='#EAD2BF')? "selected":"")}></span>
                <span onClick={() => selectColor('#EDECBB')} 
                    className={"yellow color " + ((color==='#EDECBB')? "selected":"")}></span>
                <span onClick={() => selectColor('#C8EBBF')} 
                    className={"green color " + ((color==='#C8EBBF')? "selected":"")}></span>
                <span onClick={() => selectColor('#BBD0ED')} 
                    className={"blue color " + ((color==='#BBD0ED')? "selected":"")}></span>
            </div>
            <form onSubmit={handleSubmit} action="">
                <input 
                    type="hidden" 
                    value={color} 
                    onChange={handleChangeColor} /> 
                <textarea 
                    rows="7"
                    ref={ref} 
                    placeholder="Texto ..."
                    value={text}
                    onChange={handleChangeText}>
                </textarea>
                <button className="add-button" title="Guardar"><MdDone /></button>
                <Link to="/" className="return"><MdKeyboardBackspace  title="Volver" /></Link>
            </form>
        </div>
    )
}