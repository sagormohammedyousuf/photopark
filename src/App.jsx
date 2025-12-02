import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Pricing from './pages/pricing/Pricing'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
