import React, { Component } from 'react';
import { Films } from '../shared/ListOfFilms';
import './Films.css';
export default class films extends Component {
    render() {
        return (
            <div className='container'>
                {Films.map((Films) => (
                    <div className='col'>
                        <div className='card'>
                            <img src={Films.image} />
                                <h1>{Films.Title}</h1>
                                <p>{Films.Year}</p>
                                <p>{Films.Nation}</p>
                        </div>
                    </div>

                ))}
            </div>
        )
    }

}