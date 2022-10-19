import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { css } from '@emotion/react'
import CounterApp from '../pages/CounterApp'
import JsHistory from '../pages/JsHistory'
import Pexeso from '../pages/Pexeso'
import TodoList from '../pages/TodoList'

const MenuStyles = {
  width: '98%',
  color: 'white',
  textDecoration: 'none',
  border: '5px solid white',
  padding: '5px',
  backgroundColor: 'rgb(0, 0, 0)',
  borderRadius: '100px',
  display: 'inline-block',
  margin: '5px 5px',
} as const
const LiStyles = {
  fontFamily: 'Combo',
  fontSize: '35px',
  display: 'inline-block',
  justifyContent: 'center',
  padding: '5px',
  textDecoration: 'none',
  color: 'white',
  margin: '5px 15px 0px 0px',
}

function Navigation() {
  return (
    <div style={MenuStyles}>
      <nav>
        <ul>
          <li style={LiStyles}>
            <NavLink style={LiStyles} to='/'>
              HOME{' '}
            </NavLink>
          </li>
          <li style={LiStyles}>
            <NavLink style={LiStyles} to='/JsHistory'>
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
              TO DO APP{' '}
            </NavLink>
          </li>
          <li style={LiStyles}>
            <NavLink style={LiStyles} to='/Pexeso'>
              PEXESO{' '}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
