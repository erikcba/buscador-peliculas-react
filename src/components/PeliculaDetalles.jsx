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
            console.log(dataPelicula.genres)
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
                            <h1> {dataPelicula.title} <p className='fecha-pelicula'>{dataPelicula.release_date}</p></h1>
                            <p className='descripcion-pelicula'>{dataPelicula.overview} </p>
                            <div className='valoracion'>
                                {
                                    dataPelicula.vote_average && (
                                        <p className='puntuacion'>Valoracion del público:  {dataPelicula.vote_average.toFixed(1)} <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAkJJREFUSEuNVUty4jAQ7SbLwVWTVXBWpmJyDnOSgZvASZib4HvYFbwaO7tU2bMaoKcktawWkgleUKat7tef108I4kEAIP0TWNmAgED+58hRGQKDeNLh4fcpYGVXTyRrl6n72NXJEQGal7zfRpz8dNjNAIwNuOmOQG/rZIMAB2UionW6Gsp4gSIy2QoCgLBxKnsAKPhoucj7dXx+vq9XwVRGbfWjQMSjqc+4EME6XfWRKh4EcMcQunp+BITCpw+VaT6sJ1nHlBQVhMgq3/b0nM0u55NlrjjVENE2fR/KCLcdrS3324/nDK7/fs0AMyLI2J6BfZdzcigNmxvOVP+/PD3tX5dfjWqn2QME6CoeYjBf7ru3PWYZ3WKSCiU72Czyfqk3wPpJGvrDZuepjdR2CaA2Hbdp3v+2KzbG0yAIhzE7wxeT3YMABDAG1y263eT29DPDy0VxPruvFH5bVKBrZAHDPUCA9sMHcb2WkP5s9HZrRoWKEU30TzUvZnq5vnlQNZF26duwNydjiyblg+PJedyFMEMuF/nA0nGjRRH26XhOe5w83AEytIz0MrwPGLGrE+5mwHHGeWQGYtHG4aghV/MNAmpp9saKtNNdJtxJ4dNkRjsH//LxKrDt+qwTFXwjCGF0h++AGJURoHzREn4zZKma9rrp6uRk90Bl9vo27G/YBwqErmelXTuuvlms+mWcpv7g4bNKDgRQ0FWp5d/SCY9smHEy1ZwPCMhXKZ8J5Tp09lgxJRVT1BJJR48ErbsLMP3xP296LjEf2InJAAAAAElFTkSuQmCC" /></p>
                                    )
                                }

                            </div>

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


