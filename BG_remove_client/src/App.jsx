import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import {Route, Routes } from 'react-router-dom'

import Home from './pages/home.jsx'
import BuyCredit from './pages/BuyCredit.jsx'
import Result from './pages/Result.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'


function App() {
  
  return (
    <div className="flex flex-col min-h-screen bg-">
      <ToastContainer position="bottom-right" />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
        <Route path='/result' element={<Result/>}/> 
      </Routes>
      <Footer/>
    </div >
  )
}

export default App
