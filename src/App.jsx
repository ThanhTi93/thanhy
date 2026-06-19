import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomeAdmin from './pages/admin/home_admin/HomeAdmin'
import Header from './components/client/Header'
import Footer from './components/client/Footer'
import Home from './pages/client/home/Home'
import { useLogin } from './contexts/LoginContext'

function App() {
   const { currentUser } = useLogin();
  return (
   <>
   {currentUser?.role === "admin" ? <HomeAdmin /> :   <Home />}
   </>
  )
}

export default App
