import React from 'react'
import logo from '../logo.svg'
import { Link } from '@reach/router'
import { MdNoteAdd } from 'react-icons/md'
export default function Header() {
    return (
        <div className="header">
            <h3>
                <img src={logo} className="App-logo" alt="logo" width="80px" /> 
                React Notes
                <Link to="/add" className="add"><MdNoteAdd  title="Nueva Nota" /></Link>
            </h3>
        </div>
    )
}
