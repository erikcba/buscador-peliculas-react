import '../index.css'
import React, { useState } from 'react'


export const Home = () => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmVhNmM0OWM4OTM1OTg2NDI2ZGY5YjJiZTEwNzNlNCIsInN1YiI6IjY1MTRhMTk5OWI4NjE2MDExYzQ3NmZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIMvV_gF0PabXFA0ma1WgMd0lyBqcOujHxVVrCT7us8'
    }
  };

  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchPelicula()
  }

  const fetchPelicula = async () => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${busqueda}&include_adult=false&language=es-ES&page=1`, options)
      const data = await res.json()
      console.log(data.results)
      setPeliculas(data.results)
    } catch (error) {
      console.error(error)
    }
  }




  return (
    <>
      <div className='banner'>
        <h1>Peliculini, donde podes ver tus pelis favoritas</h1>
      </div>

      <div className='container'>
        <div className='container-busqueda'>
          <h3>Busca tu peli favorita:</h3>
          <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
              value={busqueda}
              onChange={handleBusqueda}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

      </div>

      <div className='container'>
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt="" />
            
            <div className='movie-card-info'>
              <div className='titulo-pelicula'>
                <h3 >{pelicula.title} </h3>
              </div>

              <button className='btn btn-primary'> Ver más </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
