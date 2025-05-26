import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Anatomy from './pages/Anatomy'
import Faring from './pages/Faring'
// import Laring from './pages/Laring'
// import Trakea from './pages/Trakea'
// import Bronkus from './pages/Bronkus'
// import Pulmo from './pages/Pulmo'
// import Quiz from './pages/Quiz'

function App() {
  return (
    <Router basename='respirasi'>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anatomy" element={<Anatomy />} />
                <Route path="/faring" element={<Faring />} />
                {/* <Route path="/laring" element={<Laring />} />
                <Route path="/trakea" element={<Trakea />} />
                <Route path="/bronkus" element={<Bronkus />} />
                <Route path="/pulmo" element={<Pulmo />} />
                <Route path="/quiz" element={<Quiz />} /> */}
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