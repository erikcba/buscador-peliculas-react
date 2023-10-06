import React, { useEffect, useState } from 'react'
import '../styles/categorias.css'

export const BotonesCategorias = ({ generos }) => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmVhNmM0OWM4OTM1OTg2NDI2ZGY5YjJiZTEwNzNlNCIsInN1YiI6IjY1MTRhMTk5OWI4NjE2MDExYzQ3NmZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIMvV_gF0PabXFA0ma1WgMd0lyBqcOujHxVVrCT7us8'
        }
    };


    const [peliculasPorGenero, setPeliculasPorGenero] = useState([]);


    const [generoElegido, setGeneroElegido] = useState(null)

    const handleGenero = async (genero) => {
        setGeneroElegido(genero.id);
        try {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=20&with_genres=${genero.id}`, options)
            const data = await res.json()
            setPeliculasPorGenero(data.results)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        console.log(generoElegido)

    }, [generoElegido])


    return (
        <>
            <h1 className='titulo'>Categorias</h1>

            <div className="container generos-contenedor">

                {
                    generos.genres ? (
                        generos.genres.map((genero) => (
                            <button key={genero.id} className='generos-card' onClick={() => handleGenero(genero)}>
                                <h3>{genero.name} </h3>
                            </button>
                        ))
                    )
                        :
                        (
                            <p>Cargando géneros...</p>
                        )
                }

            </div>




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

                            <button> Ver más </button>
                        </div>

                    </div>
                ))
                }

            </div>


        </>
    )
}
