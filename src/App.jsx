import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Pages/Login'
import DetailMenteePage from './Pages/DetailMenteePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DetailMenteePage />
    </div>
  )
}

export default App
