import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import styled from '@emotion/styled'

const TodoList = () => {
  const TodoListStyle = {
    background: 'black',
    border: '2px dotted grey',
    color: 'white',
    fontFamily: 'Combo',
    margin: '20px 70px',
    fontSize: '30px',
    textAlign: 'center',
    padding: '20px',
    marginBottom: '0px',
    borderRadius: '65px',
    fontWeight: 'normal',
  } as const
  return (
    <div>
      <h2 style={TodoListStyle}>This app is in process, stay tuned . . .</h2>
    </div>
  )
}
export default TodoList
