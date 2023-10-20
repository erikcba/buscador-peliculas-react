import React, { useEffect, useState } from 'react'

export const Trailer = ({ id }) => {

    const [trailer, setTrailer] = useState('')

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmVhNmM0OWM4OTM1OTg2NDI2ZGY5YjJiZTEwNzNlNCIsInN1YiI6IjY1MTRhMTk5OWI4NjE2MDExYzQ3NmZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIMvV_gF0PabXFA0ma1WgMd0lyBqcOujHxVVrCT7us8'
        }
    };

    const fetchPeliculaTrailer = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-ES`, options);
            const data = await res.json();
            setTrailer(data.results[0].key)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPeliculaTrailer()
        console.log("el key del trailer es:", trailer)
    }, [id])



    return (

        <>
            <div className='trailer-contenedor'>
                <h1 className='titulo'>Trailer</h1>
                <div className='trailer-video'>
                    {
                        trailer ?
                            <iframe width="800" height="500" src={`https://www.youtube.com/embed/${trailer}?si=swtmYFP74-U-ERHA`}
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                            : <div className='trailer-no-disponible'>
                                <img src="../trailer-no-disponible.webp" alt="" />
                                <h2>Lo sentimos, no tenemos el trailer</h2>
                            </div>
                    }

                </div>
            </div>

        </>
    )
}
