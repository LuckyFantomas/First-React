import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { css } from '@emotion/react'
import CounterApp from '../pages/CounterApp'
import JsHistory from '../pages/JsHistory'
import TodoList from '../pages/TodoList'

const Home = () => {
  return (
    <div>
      <Header />
      <MyImg />
      <About />
    </div>
  )
}
const MyImg = () => {
  const myImgStyles = {
    position: 'relative',
    width: 'auto',
    maxWidth: '150px',
    height: '150px',
    margin: 'auto',
    marginTop: '20px',
    background: 'url(/image/img5.jpeg) no-repeat center center',
    backgroundSize: 'cover',
    marginBottom: '10px',
    border: '1px solid white',
    borderRadius: '50%',
  } as const

  return <div style={myImgStyles}></div>
}

const Header = () => {
  const h1Styles = {
    background: 'black',
    color: 'white',
    fontFamily: 'Combo',
    margin: '20px 70px',
    fontSize: '50px',
    textAlign: 'center',
    padding: '20px',
    marginBottom: '0px',
    borderRadius: '15px 15px 0 0',
  } as const
  const h2Styles = {
    background: 'black',
    color: 'white',
    fontFamily: 'Combo',
    textAlign: 'center',
    fontSize: '30px',
  } as const
  return (
    <div>
      <h1 style={h1Styles}>
        Hi, Iam Martin <br />
        <br />
        Iam on the way to be a <br /> SOFTWARE DEVELOPER
      </h1>
      <h2 style={h2Styles}>and this is my little presentation.</h2>
    </div>
  )
}
const About = () => {
  const h1Styles = {
    color: 'white',
    fontFamily: 'Combo',
    margin: '20px 70px',
    fontSize: '50px',
    textAlign: 'center',
    padding: '20px',
  } as const
  const pStyles = {
    color: 'white',
    fontFamily: 'Combo',
    margin: 'auto',
    fontSize: '20px',
    textAlign: 'center',
    padding: '20px',
    width: '50%',
  } as const
  return (
    <div>
      <h1 style={h1Styles}>ABOUT ME</h1>
      <p style={pStyles}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, nesciunt saepe ipsam cum
        quaerat, odio dolores ipsa quasi quis voluptatibus at, necessitatibus repellendus suscipit
        sunt deleniti minus incidunt assumenda dolore?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, <br />
        nesciunt saepe ipsam cum quaerat, odio dolores ipsa quasi quis voluptatibus at,
        necessitatibus repellendus suscipit sunt deleniti minus incidunt assumenda dolore?Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, nesciunt saepe ipsam cum
        quaerat, odio dolores ipsa quasi quis voluptatibus at, necessitatibus repellendus suscipit
        sunt deleniti minus incidunt assumenda dolore?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, nesciunt saepe ipsam cum quaerat, odio dolores ipsa quasi quis
        voluptatibus at, necessitatibus repellendus suscipit sunt deleniti minus incidunt assumenda
        dolore
      </p>
    </div>
  )
}

export default Home
