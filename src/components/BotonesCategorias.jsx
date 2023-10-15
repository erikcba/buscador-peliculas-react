import React, { useEffect, useState } from 'react'
import '../styles/categorias.css'
import { ListaPeliculas } from './ListaPeliculas';

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
    

    const [pagina, setPagina] = useState(1)


    const fetchData = async () => {

        try {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=${pagina}&with_genres=${generoElegido}`, options)
            const data = await res.json()
            setPeliculasPorGenero(data.results)
        } catch (error) {
            console.error(error)
        }

    }

    const handleGenero = async (genero) => {
        setGeneroElegido(genero.id)
        setPagina(1)
        fetchData()
    }

    const handlePaginaSig = () => {
        setPagina(pagina + 1)
        fetchData();
    }

    const handlePaginaAnterior = () => {
        if (pagina > 1) {
            setPagina(pagina - 1)
            fetchData()
        }
    }


    useEffect(() => {
        console.log(pagina)
        if(generoElegido){
            fetchData()
        }

    }, [generoElegido, pagina])





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


            <ListaPeliculas peliculasPorGenero={peliculasPorGenero}></ListaPeliculas>



            <div className='container'>
                {
                    pagina > 1 ?
                        <button className='btn btn-primary' onClick={handlePaginaAnterior}>Anterior</button>
                        :
                        <button className='btn btn-primary' disabled>Anterior</button>
                }

                <p>{pagina} </p>
                {
                    generoElegido ?
                        <button className='btn btn-primary' onClick={handlePaginaSig} >Siguiente</button>
                        :
                        <button className='btn btn-primary' disabled >Siguiente</button>
                }

            </div>




        </>
    )
}
