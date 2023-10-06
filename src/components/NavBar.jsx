import { Link, NavLink } from 'react-router-dom'
import '../index.css'

export const NavBar = () => {

   



    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-color">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Peliculini</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link " >Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/categorias' className="nav-link" >Categorias</NavLink>
                            </li>

                        </ul>
                        
                    </div>
                </div>
            </nav>

            
        </>
    )
}
