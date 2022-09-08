import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Button1 from '../components/buttons'
import Gallery from '../components/Gallery/Gallery'
import React from 'react'

type Props = {}
type State = {
  counter: number
}
class CounterApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  render() {
    console.log('Counter render')
    return (
      <div>
        <h1 style={h1Styles}>This is my basic counter app, try it!</h1>
        <div style={wrapperStyles}>
          <button
            style={Button1Styles}
            onClick={() => {
              console.log('-1 clicked')
              this.setState({
                counter: this.state.counter - 1,
              })
            }}
          >
            -1
          </button>
          <h1>{this.state.counter}</h1>
          <button
            style={Button1Styles}
            onClick={() => {
              console.log('+1 clicked')
              this.setState({
                counter: this.state.counter + 1,
              })
            }}
          >
            +1
          </button>
        </div>
      </div>
    )
  }
}
const h1Styles = {
  color: 'white',
  fontFamily: 'Combo',
  margin: 'auto',
  fontSize: '40px',
  textAlign: 'center',
  padding: '20px',
  marginBottom: '0px',
  borderRadius: '15px 15px 0 0',
  fontWeight: 'normal',
} as const
const Button1Styles = {
  width: '70px',
  height: '70px',
  color: 'white',
  background: 'rgb(22, 22, 22)',
  fontSize: '35px',
  borderRadius: '30px',
  border: '3px solid white',
  alignItems: 'center',
  display: 'inline-block',
  cursor: 'pointer',
} as const
const wrapperStyles = {
  border: '1px solid white',
  width: '50%',
  margin: 'auto',
  color: 'white',
  textDecoration: 'none',
  padding: '10px',
  paddingBottom: '-10px',
  borderRadius: '100px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignContent: 'flex-start',
  flexWrap: 'nowrap',
  flexDirection: 'row',
} as const

export default CounterApp
