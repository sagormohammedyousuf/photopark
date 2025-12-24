import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Pricing from './pages/pricing/Pricing'
import Portfolio from './pages/portfolio/Portfolio'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
