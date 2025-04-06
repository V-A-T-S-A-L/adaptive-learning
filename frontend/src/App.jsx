import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage'

function App() {


	return (
		<Router>
			<Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
		</Router>

	)
}

export default App