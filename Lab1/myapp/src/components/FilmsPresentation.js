import React, { Component } from 'react';
import { Films } from '../shared/ListOfFilms';
// import './Films.css';
export default function FilmsPresentation({Films}) {
    // render()
        return (
            <div className='container'>
                {Films.map((Films) => (
                    <div className='col'>
                        <div className='card'>
                            <img src={Films.image} />
                                <h1>{Films.Title}</h1>
                                <p className=''>{Films.Year}</p>
                                <p>{Films.Nation}</p>
                                <p><button>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
