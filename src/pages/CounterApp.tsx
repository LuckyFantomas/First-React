import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import React from 'react'

/* COUNTER */

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
        <h1>Hey man, this is basic counter, try it!</h1>

        <button
          onClick={() => {
            console.log('-1 clicked')
            this.setState({
              counter: this.state.counter - 1,
            })
          }}
        >
          -1
        </button>
        <h2>{this.state.counter}</h2>
        <button
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
    )
  }
}

export default CounterApp
