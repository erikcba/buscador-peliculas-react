import React, { useEffect, useState } from 'react'

export const PeliculasRelacionadas = ({ options, id }) => {

    const [similar, setSimilar] = useState([])

    const fetchPeliculaSimilar = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=es-ES&page=1`, options)
            const data = await res.json()
            console.log(data.results)
            setSimilar(data.results)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
      fetchPeliculaSimilar()
    
    }, [id])
    

    return (
        <>
            <h1 className='titulo'>Peliculas similares:</h1>
            <div>
                {
                    similar ? (
                        similar.map((pelicula) => (
                            <div key={pelicula.id} >
                                <h3>{pelicula.title} </h3>
                            </div>
                        ))
                    )
                    :
                    <p>cargando...</p>
                }
            </div>
        </>
    )
}
