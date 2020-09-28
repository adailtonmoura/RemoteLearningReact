import React from 'react'
import './Card.css'

export default (props) =>
    <div className='card'>
        <h1 className="course">{props.name}</h1>
        <p>{props.teacher}</p>
    </div>