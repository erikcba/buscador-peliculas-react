import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/peliculaDetalles.css'

export const PeliculasRelacionadas = ({ options, id }) => {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 25,
    

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            }
        }
    });

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
            <h1 className='titulo'>Peliculas relacionadas</h1>

            <div className='peliculas-relacionadas swiper'>
                <div className="swiper-wrapper">
                    {
                        similar ? (
                            similar.map((pelicula) => (
                                <div key={pelicula.id} className='movie-card swiper-slide' >

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
                            <p>cargando...</p>
                    }
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-scrollbar"></div>
            </div>

        </>
    )
}

