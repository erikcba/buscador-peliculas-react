import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/peliculaDetalles.css'
import { Trailer } from './Trailer';

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
        console.log("peliculaDatos en useEffect:", id);

        const fetchPeliculaDetalles = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options);
                const data = await res.json();
                setDataPelicula(data);
            } catch (error) {
                console.error(error);
            }
        }

        if (id) {
            fetchPeliculaDetalles();
            console.log(dataPelicula)
        }

    }, [id])


    return (
        <>
            <div className=' pelicula-detalles'>

                <div className='encabezado_pelicula-detalles'
                    style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w1280${dataPelicula.backdrop_path}`})` }}>

                    <div className='encabezado_pelicula-titulo '>
                        <img className='encabezado_pelicula-imagen' src={`https://image.tmdb.org/t/p/w500${dataPelicula.poster_path}`} alt="" />
                        <div className='encabezado_pelicula-texto '>
                            <h1> {dataPelicula.title} <p className='fecha-pelicula'>{dataPelicula.release_date}</p>  </h1>
                            <p className='descripcion-pelicula'>{dataPelicula.overview} </p>
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <p className='descripcion-pelicula oculto'>{dataPelicula.overview} </p>
            </div>

            <Trailer id={id} ></Trailer>

            <div>
                <h1>Similares</h1>
            </div>

        </>
    )
}


