import React from 'react'
import { NavBar } from './NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../routes/Home'
import { Categorias } from '../routes/Categorias'

export const BuscadorApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/'element={<Home></Home>} ></Route>
        <Route path="/categorias"element={<Categorias></Categorias>} ></Route>
    </Routes>
    </>
  )
}
