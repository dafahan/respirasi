import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Anatomy from './pages/Anatomy'
import Faring from './pages/Faring'
import Laring from './pages/Laring'
import Trakea from './pages/Trakea'
import Bronkus from './pages/Bronkus'
import Pulmo from './pages/Pulmo'
import Quiz from './pages/Quiz'

function App() {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <Router basename="respirasi">
      <div className="flex flex-col min-h-screen">
        <Navbar toggleSidebar={() => setShowSidebar(prev => !prev)} />
        <div className="flex flex-1">
          {showSidebar && <Sidebar />}
          <main className="flex-1 p-4">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anatomy" element={<Anatomy />} />
                <Route path="/faring" element={<Faring />} />
                <Route path="/laring" element={<Laring />} />
                <Route path="/trakea" element={<Trakea />} />
                <Route path="/bronkus" element={<Bronkus />} />
                <Route path="/pulmo" element={<Pulmo />} />
                <Route path="/quiz" element={<Quiz />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
