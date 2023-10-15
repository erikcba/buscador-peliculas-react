import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const PeliculaDetalles = () => {

    const { id } = useParams()
    const [dataPelicula, setDataPelicula] = useState({});

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmVhNmM0OWM4OTM1OTg2NDI2ZGY5YjJiZTEwNzNlNCIsInN1YiI6IjY1MTRhMTk5OWI4NjE2MDExYzQ3NmZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIMvV_gF0PabXFA0ma1WgMd0lyBqcOujHxVVrCT7us8'
        }
    };



    useEffect(() => {
        console.log("peliculaDatos en useEffect:", id );

        const fetchPeliculaDetalles = async () => {
            try {

                const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options);
                const data = await res.json();
                setDataPelicula(data);
            } catch (error) {
                console.error(error);
            }
        }

        if (id ) {      
            fetchPeliculaDetalles();
            
        }

    }, [id ])


    return (
        <>
            <div className='container'>

                <h1> {dataPelicula.title} </h1>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${dataPelicula.poster_path}`} alt="" />
                </div>

            </div>
        </>
    )
}


