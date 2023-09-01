import React, { useState } from "react";
import { Films } from "../shared/ListOfFilms";
import { Link } from "react-router-dom";
import "./Films.css";
import './Detail.css'

export default function FilmsPresentation() {
  const [selectedFilm, setSelectedFilm] = useState([]);

  // const openPopUp = (film) => {
  //   setSelectedFilm(film);
  // };

  // const closePopUp = () => {
  //   setSelectedFilm(null);
  // };

  return (
    <div className="container">
      {Films.map((film) => (
        <div className="col" key={film.id}>
          <div className="card">
            <img src={film.image} alt={film.Title} />
            <div className="card-body">
              <div className="title-body">
                <h3>{film.Title}</h3>
              </div>
              <p>Year: {film.Year}</p>
              <p>Nation: {film.Nation}</p>
              <Link to={`Detail/${film.id}`}>
                <p><button>Detail</button></p>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div id='popup1' className='overlay'>
        <div className='popup'>
          <img src={Films.img} />
          <h2>{Films.title}</h2>
          <a className='close' href='#/'>&times;</a>
          <div className='content'>
            {Films.info}
          </div>
        </div>
      </div>
    </div>
  )
}