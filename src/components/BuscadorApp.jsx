import React from 'react'
import { NavBar } from './NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../routes/Home'
import { Categorias } from '../routes/Categorias'
import { PeliculaDetalles } from './PeliculaDetalles'



export const BuscadorApp = () => {
  return (
    <>
      <NavBar />



      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path="/categorias" element={<Categorias></Categorias>} ></Route>
        <Route path='/peliculaDetalles/:id' element={<PeliculaDetalles></PeliculaDetalles>} ></Route>
      </Routes>


    </>
  )
}
