import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CounterApp from './pages/CounterApp'
import Home from './pages/Home'
import JsHistory from './pages/JsHistory'
import Navigation from './components/Navigation'
import Pexeso from './pages/Pexeso'
import TodoList from './pages/TodoList'

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
const style = {
  margin: theme.spacing.md,
}

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main className='Content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/JsHistory' element={<JsHistory />} />
          <Route path='/Counter' element={<CounterApp />} />
          <Route path='/ToDoList' element={<TodoList />} />
          <Route path='/Pexeso' element={<Pexeso />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
