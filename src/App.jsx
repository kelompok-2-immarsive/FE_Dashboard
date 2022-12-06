import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import DashboardApp from './Pages/DashboardApp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<DashboardApp children={<Dashboard />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
