import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { css } from '@emotion/react'
import CounterApp from '../pages/CounterApp'
import JsHistory from '../pages/JsHistory'
import TodoList from '../pages/TodoList'

const MenuStyles = {
  maxWidth: '100%',
  color: 'white',
  textDecoration: 'none',
  border: '5px solid white',
  padding: '5px',
  backgroundColor: 'rgb(0, 0, 0)',
  borderRadius: '100px',
  display: 'inline-block',
  justifyContent: 'space-between',
    margin: '10px auto',
  
} as const
const LiStyles = {
  fontFamily: 'Combo',
  fontSize: '45px',
  display: 'inline-block',
  listStyleType: 'none',
  padding: '5px',
  textDecoration: 'none',
  color: 'white',
  margin: '10px',
} as const

function Navigation() {
  return (
    <div style={MenuStyles}>
      <nav>
        <ul>
          <li style={LiStyles}>
            <NavLink style={LiStyles} to='/'>
              HISTORY OF JAVA SCRIPT{' '}
            </NavLink>
          </li>
          <li style={LiStyles}>
            <NavLink style={LiStyles} to='/Counter'>
              SIMPLE COUNTER{' '}
            </NavLink>
          </li>
          <li style={LiStyles}>
            <NavLink style={LiStyles} to='/ToDoList'>
              TO DO LIST{' '}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
