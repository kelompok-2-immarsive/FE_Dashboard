import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import './App.css'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import DashboardApp from './Pages/DashboardApp';
import AddMentee from './Pages/AddMentee';
import ClassList from './Pages/ClassList';
import UsersPage from './Pages/UsersPage';
import MenteeList from './Pages/MenteeList';
import ClassList from './Pages/ClassList'
import Page404 from './Pages/Page404';


function App() {
  const [cookie, setCookie] = useCookies();

  if (cookie.token === null || cookie.token === 'undefined') {
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
          <Route path='/class' element={<DashboardApp children={<ClassList />} index={'class'}/ />} />
          <Route path='/' element={<DashboardApp children={<Dashboard />} index={`dashboard`} />} />
          <Route path='/mentee' element={<DashboardApp children={<MenteeList />} index={'mentee'}/>} />
          <Route path='/mentee/add' element={<DashboardApp children={<AddMentee />} index={'mentee'} />} />
          <Route path='/users' element={<DashboardApp children={<UsersPage />} index={'users'} />} />
          <Route path='/class' element={<DashboardApp children={<ClassList />} index={'class'} />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
