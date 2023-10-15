
import { peliculaIdContext } from '../components/ListaPeliculas'
import { PeliculaDetalles } from '../components/PeliculaDetalles'


export const Pelicula = () => {
    

    return (
        <peliculaIdContext.Provider >
            <PeliculaDetalles  >

            </PeliculaDetalles>
        </peliculaIdContext.Provider>
    )
}
