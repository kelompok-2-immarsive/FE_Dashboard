import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      {/* <Login/> */}
      <Dashboard />
    </div>
  )
}

export default App
