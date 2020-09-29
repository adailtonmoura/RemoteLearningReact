import React from 'react'
import './ContentHeader.css'

export default function ContentHeader(props) {
    return (
        <header className="header"> 
            <h1> {props.title} </h1>
        </header>
    )
}
