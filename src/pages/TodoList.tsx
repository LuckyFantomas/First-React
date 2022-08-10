/* import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import React from 'react'

const TodoList = () => {
  const [text, setText] = useState('')
  return (
    <div>
      <h1>{text}!</h1>
      <p>(is in process...stay tuned!)</p>
      <input
        type='text'
        value={text}
        onChange={event => {
          console.log(event)
          console.log(event.target)
          console.log(event.target.value)
          setText(event.target.value)
        }}
      />
    </div>
  )
}

export default TodoList
 */
