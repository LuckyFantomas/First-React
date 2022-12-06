import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CounterApp from './pages/CounterApp'
import Home from './pages/Home'
import JsHistory from './pages/JsHistory'
import Navigation from './components/Navigation'
import TodoList from './pages/TodoList'
import Tunes from './pages/Tunes'

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
          <Route path='/Tunes' element={<Tunes />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
