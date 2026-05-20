import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomeAdmin from './pages/admin/home_admin/HomeAdmin'
import Header from './components/client/Header'
import Footer from './components/client/Footer'
import Home from './pages/client/home/Home'

function App() {
  
  return (
   <>
   <HomeAdmin />
   {/* <Home /> */}
   </>
  )
}

export default App
