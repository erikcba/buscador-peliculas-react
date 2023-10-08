import React from 'react'

export const ListaPeliculas = ({peliculasPorGenero}) => {
    return (
        <>
            <div className='peliculas-container container '>

                {peliculasPorGenero.map((pelicula) => (
                    <div key={pelicula.id} className='movie-card'>

                        <div className='movie-card-img'>
                            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt="" />
                        </div>

                        <div className='movie-card-info'>
                            <div className='titulo-pelicula'>
                                <h3 >{pelicula.title} </h3>
                            </div>

                            <button className='btn btn-primary'> Ver más </button>
                        </div>

                    </div>
                ))
                }

            </div>
        </>
    )
}
