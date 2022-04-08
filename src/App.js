import React from 'react'
import Navbar from './components/Navbar/Navbar.component'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import BlockChain from './pages/Blockchain'
import Services from './pages/Services'
import Engineering from './pages/Engineering'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blockchain' element={<BlockChain />} />
        <Route path='/engineering' element={<Engineering />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
