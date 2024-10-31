import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Shah'];

  const books = [
    { id: 1, name: 'physics', price: 100 },
    { id: 2, name: 'Math', price: 120 },
    { id: 3, name: 'Chemistry', price: 130 },
    { id: 4, name: 'Biology', price: 150 },
  ]

  const singers = [
    { id: 1, name: 'Dr. Mahfuzur', age: 68 },
    { id: 2, name: 'Eva Rahman', age: 38 },
    { id: 3, name: 'Shuvro Dev', age: 58 },
    { id: 4, name: 'Pritom', age: 28 },
  ]

  return (
    <>
      <Person></Person>

      <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="54000"></Device>
      <Device name="Watch" price="4000"></Device>

      <Student grade="7" score="90"  ></Student>
      <Student grade="7" score="20"  ></Student>
      <Student grade={12} score="30"  ></Student>

      <Student></Student>
      <Student></Student>

      <Developer></Developer>




      <h1>Vite + React</h1>

      <Todo
        task="learn React"
        isDone={true}>

      </Todo>

      <Todo
        task="Explore React core concept"
        isDone={false}>

      </Todo>

      <Todo
        task="try jsx in React"
        isDone={true}>

      </Todo>


      {/* mapping from actors */}

      <Actor name={"Bappa Raz"}></Actor>


      {
        actors.map(actor => <Actor name={actor}> </Actor>)
      }



      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }



      <BookStore books={books}></BookStore>







    </>
  )
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'sakib', age: 12 }
  return <h3>I am {person.name} with age: {age + money}</h3>
}

function Device(props) {
  // console.log(props)
  return <h2>This device: {props.name} price: {props.price}</h2>
}





// const {grade, score} = {grade: '7', score: '99'};


function Student({ grade = 1, score = 0 }) { //destructuring system
  console.log({ grade, score });
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade} </p>
      <p>score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  }

  return (

    <div style={developerStyle}>

      <h5>Devo devo</h5>
      <p>coding: </p>
    </div>

  )

}

export default App
