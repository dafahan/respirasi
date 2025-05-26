import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mr-2"
              >
                🫁
              </motion.div>
              Sistem Respirasi
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" text="Home" />
            <NavLink to="/anatomy" text="Anatomi" />
            <NavLink to="/quiz" text="Quiz" />
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" text="Home" />
            <MobileNavLink to="/anatomy" text="Anatomi" />
            <MobileNavLink to="/quiz" text="Quiz" />
          </div>
        </motion.div>
      )}
    </nav>
  )
}

function NavLink({ to, text }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300"
    >
      {text}
    </Link>
  )
}

function MobileNavLink({ to, text }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition duration-300"
    >
      {text}
    </Link>
  )
}