import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'

let user = true
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Chat = lazy(() => import('./pages/Chat'))
const Groups = lazy(() => import('./pages/Groups'))
const NotFound = lazy(() => import('./pages/NotFound'))
const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProtectRoute user={user}/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/chat/:chatId" element={<Chat/>} />
      <Route path="/groups" element={<Groups/>} />
      </Route>
      <Route path="/about" element={<div>About</div>} />
      <Route path="/login" element={<ProtectRoute user={!user} redirect='/'>
      <Login/>
      </ProtectRoute>} />





    <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
}

export default App
