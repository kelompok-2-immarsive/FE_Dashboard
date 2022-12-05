import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Pages/Login'
import NavbarSamping from './Components/NavbarSamping'
import NavigationBar from './Components/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavigationBar />
    </div>
  )
}

export default App
