import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import './App.css'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import DashboardApp from './Pages/DashboardApp';
import AddMentee from './Pages/AddMentee';


function App() {
  const [cookie, setCookie] = useCookies();
  const authedUser = cookie.token || 'undefined';
  console.log(authedUser)

  if (authedUser === null || authedUser === 'undefined') {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Login />} />
        </Routes>
      </BrowserRouter>
    )
  }else{
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardApp children={<Dashboard />} />} />
          <Route path='/dashboard' element={<DashboardApp children={<Dashboard />} />} />
          <Route path='/mentee/add' element={<DashboardApp children={<AddMentee />} />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
