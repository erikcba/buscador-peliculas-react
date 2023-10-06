import React from 'react'
import '../styles/categorias.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { BotonesCategorias } from '../components/BotonesCategorias';


export const Categorias = () => {

  const [generos, setGeneros] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmVhNmM0OWM4OTM1OTg2NDI2ZGY5YjJiZTEwNzNlNCIsInN1YiI6IjY1MTRhMTk5OWI4NjE2MDExYzQ3NmZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIMvV_gF0PabXFA0ma1WgMd0lyBqcOujHxVVrCT7us8'
    }
  };

  const fetchGeneros = async () => {
    try {
      const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=es', options)
      const data = await res.json()
      console.log(data)
      setGeneros(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchGeneros()
    
  }, [])

  return (
    <>
      <BotonesCategorias generos={generos}  />
      
    </>
  )
}
