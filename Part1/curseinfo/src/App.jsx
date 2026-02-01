import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
@author: Jose Luis Sierra Ramirez
@description: En este ejercicio se crea una aplicacion de react que muestra el nombre de un curso, las partes del curso y la cantidad de ejercicios en cada parte. Se utilizan componentes funcionales y props para pasar los datos entre los componentes.
@date: 2025-02-01 
*/

//const Title = ([course]) => <h1>{course}</h1>// Aca genero la destructuracion del props con los corchetes esta es una practica poco comun y lo generamos en un one-Liner
/*
const Title = (props) => { // Aca genero la destructuracion del props con los corchetes esta es una practica poco comun y lo generamos en un one-Liner
  return <h1>{props.title}</h1>
}
  estas son las dos formas que investigue y profundice para destructurar props una larga y una corta de una linea
*/

const Header = (props) => {
  return <h1>{props.title}</h1>
}

const Part = (props) => {
  return( 
  <div>
    <p>{props.part} [{props.exercises}]</p>
  </div>
  )}
  
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts} exercises={props.exercises} />
    </div>
  )}


const Total = (props) => {
  return <p>Number of exercises {props.exercises}  = {props.exercises1 + props.exercises2 + props.exercises3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content parts={part1} exercises={exercises1} />
      <Content parts={part2} exercises={exercises2} />
      <Content parts={part3} exercises={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App

