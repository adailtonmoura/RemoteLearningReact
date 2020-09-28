import React, { Component } from 'react'
import './Assistant.css'

import api from '../services/api'

import Card from '../components/Card'

export default class Assistant extends Component {

    state = {
        disciplines: [],
    }
    componentDidMount(){
        this.loadDisciplines();
    }

    loadDisciplines = async () => {
        const response = await api.get('api/discipline')
        console.log(response.data.disciplines)
        this.setState({disciplines: response.data.disciplines})
    }

    render() {
        return (
            <div className='disciplines'>
                {this.state.disciplines.map(discipline =>(
                    <Card name={discipline.name} teacher={discipline.teacher} />
                ))}
            </div>
        )
    }
}
