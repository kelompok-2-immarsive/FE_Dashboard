import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Pages/Login'
import DetailMentee from './Pages/DetailMentee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DetailMentee />
    </div>
  )
}

export default App
