import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CounterApp from './pages/CounterApp'
import JsHistory from './pages/JsHistory'
import TodoList from './pages/TodoList'

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to='/'>History of JS </NavLink>
          <NavLink to='/Counter'>Counter </NavLink>
          <NavLink to='/ToDoList'>ToDoList </NavLink>
        </nav>
      </header>

      <main className='Content'>
        <Routes>
          <Route path='/' element={<JsHistory />} />
          <Route path='/Counter' element={<CounterApp />} />
          <Route path='/ToDoList' element={<TodoList />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
