import React, { useState } from "react";
import { Films } from "../shared/ListOfFilms";
import "./Films.css";

export default function FilmsPresentation() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const openPopUp = (film) => {
    setSelectedFilm(film);
  };

  const closePopUp = () => {
    setSelectedFilm(null);
  };

  return (
    <>
      <div className="container">
        {Films.map((film) => (
          <div className="col" key={film.id}>
            <div className="card">
              <img src={film.image} alt={film.Title} />
              <div className="card-body">
                <div className="title-body">
                  <h3>{film.Title}</h3>
                </div>
                <p>{film.Year}</p>
                <p>{film.Nation}</p>

                <button onClick={() => openPopUp(film)}>
                  <a href="#popup1" id="openPopUp" style={{ color: "white" }}>
                    Detail
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedFilm && (
        <div id="popup1" className="overlay">
          <div className="popup">
            <img src={selectedFilm.image} alt={selectedFilm.Title} />
            <h2>{selectedFilm.Title}</h2>
            <a className="close" href="#" onClick={closePopUp}>
              &times;
            </a>
            <div className="content">{selectedFilm.info}</div>
          </div>
        </div>
      )}
    </>
  );
}
