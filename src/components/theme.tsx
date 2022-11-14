import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import React, { ChangeEvent, ComponentProps, useState } from 'react'

const theme = {
  spacing: {
    xs: '1rem',
    sm: '1.5rem',
    md: '2rem',
    lg: '4rem',
    xl: '6rem',
  },
  color: {
    main: 'black',
    second: 'white',
    button: 'grey',
    link: 'red',
  },
  font: {
    xs: '1rem',
    sm: '1.5rem',
    md: '2rem',
    lg: '4rem',
    xl: '6rem',
  },
  mediaQuery: {
    desktop: '960px',
    tablet: '520px',
    mobile: '320px',
  },
} as const
const styles = {
  h1: {
    color: 'red',
    fontFamily: 'Combo',
    margin: '20px 70px',
    fontSize: '50px',
    textAlign: 'center',
    padding: '20px',
  },
}


export default theme
