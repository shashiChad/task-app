import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Viewtask from './components/Viewtask'
import Task from './components/Task'

const router = createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:"/tasks",
    element:
    <div>
      <Navbar/>
      <Task/>
    </div>
  },
  {
    path:"/tasks/:id",
    element:
    <div>
      <Navbar/>
      <Viewtask/>
    </div>
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
