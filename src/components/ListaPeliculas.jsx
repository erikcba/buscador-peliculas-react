import React, { createContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { PeliculaDetalles } from './PeliculaDetalles'

export const peliculaIdContext = createContext()

export const ListaPeliculas = ({ peliculasPorGenero }) => {

    const [peliculaId, setPeliculaId] = useState("")


    const handleId = async (pelicula) => {
        setPeliculaId(pelicula.id)
        console.log(peliculaId)
    }


    return (
        <>
            <div className='peliculas-container container '>

                {peliculasPorGenero ? (
                    peliculasPorGenero.map((pelicula) => (
                        <div key={pelicula.id} className='movie-card'>

                            <div className='movie-card-img'>
                                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt="" />
                            </div>

                            <div className='movie-card-info'>
                                <div className='titulo-pelicula'>
                                    <h3 >{pelicula.title} </h3>
                                </div>

                                <Link to={`/peliculaDetalles/${pelicula.id}`} className='btn btn-primary' onClick={() => handleId(pelicula)} > Ver más </Link>
                            </div>

                        </div>

                    ))
                )
                    :
                    (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )
                }

            </div>

            <peliculaIdContext.Provider value={peliculaId}>
                {peliculaId && <PeliculaDetalles />}
            </peliculaIdContext.Provider>


        </>
    )
}
