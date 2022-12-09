import { useState } from 'react'
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
import Page404 from './Pages/Page404';
import AddUser from './Pages/AddUser';
import UpdateUser from './Pages/UpdateUser';
import EditMentee from './Pages/EditMentee';
import DetailMenteePage from './Pages/DetailMenteePage';
import UserListPage from './Pages/UserListPage';


function App() {
  const [cookie, setCookie] = useCookies();
  console.log(cookie.token);

  if (cookie.token === null || cookie.token === 'undefined' || cookie.token === undefined ) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Login />} />
        </Routes>
      </BrowserRouter>
    )
  }else{
    if(cookie.role === 'Admin'){
      return (
        <BrowserRouter>
          <Routes>
            {/* index */}
            <Route path='/' element={<DashboardApp children={<Dashboard />} index={`dashboard`} />} />
            
            {/* group class */}
            <Route path='/class' element={<DashboardApp children={<ClassList />} index={'class'} />} />
  
            {/* mentee */}
            <Route path='/mentee' element={<DashboardApp children={<MenteeList />} index={'mentee'}/>} />
            <Route path='/mentee/add' element={<DashboardApp children={<AddMentee />} index={'mentee'} />} />
            <Route path='/mentee/edit' element={<DashboardApp children={<EditMentee/>} index={'mentee'} />} />
            <Route path='/mentee/detail' element={<DashboardApp children={<DetailMenteePage/>} index={'mentee'} />} />
  
            {/* user */}
            <Route path='/users' element={<DashboardApp children={<UsersPage />} index={'users'} />} />
            <Route path='/users/edit' element={<DashboardApp children={<UpdateUser />} index={'users'} />} />
            <Route path='/users/add' element={<DashboardApp children={<AddUser />} index={'users'} />} />
  
            {/* error 404 */}
            <Route path='/*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      )
    }else {
      return (
        <BrowserRouter>
          <Routes>
            {/* index */}
            <Route path='/' element={<DashboardApp children={<Dashboard />} index={`dashboard`} />} />
            
            {/* group class */}
            <Route path='/class' element={<DashboardApp children={<ClassList />} index={'class'} />} />
  
            {/* mentee */}
            <Route path='/mentee' element={<DashboardApp children={<MenteeList />} index={'mentee'}/>} />
            <Route path='/mentee/add' element={<DashboardApp children={<AddMentee />} index={'mentee'} />} />
            <Route path='/mentee/edit' element={<DashboardApp children={<EditMentee/>} index={'mentee'} />} />
            <Route path='/mentee/detail' element={<DashboardApp children={<DetailMenteePage/>} index={'mentee'} />} />
  
            {/* user */}
            <Route path='/users' element={<DashboardApp children={<UserListPage />} index={'users'} />} />
  
            {/* error 404 */}
            <Route path='/*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      )
    }
  }
}

export default App
