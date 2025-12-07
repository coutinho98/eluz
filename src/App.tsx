import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar"
import Home from './pages/Home';
import ProtectionPage from './pages/ProtectionPage';
import logo from "./assets/images/logo.png"

function App() {
  return (
    <div className="w-full relative overflow-x-hidden text-center min-h-screen">

      <NavBar logoSrc={logo} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PDA&MPS" element={<ProtectionPage />} />
      </Routes>
    </div>
  )
}

export default App