import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaLungs, FaHome, FaMicroscope, FaQuestion } from 'react-icons/fa'

export default function Navbar({ toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', text: 'Home', icon: <FaHome /> },
    { to: '/anatomy', text: 'Anatomi', icon: <FaMicroscope /> },
    { to: '/quiz', text: 'Quiz', icon: <FaQuestion /> },
  ]

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & Sidebar Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="hidden md:flex items-center justify-center text-white hover:text-blue-200"
              title="Toggle Sidebar"
            >
              <FaBars size={20} />
            </button>
            <Link to="/" className="text-xl font-bold flex items-center gap-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaLungs className="text-white text-2xl" />
              </motion.div>
              Sistem Respirasi
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} text={link.text} icon={link.icon} active={location.pathname === link.to} />
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-blue-500 shadow-inner"
        >
          <div className="px-4 py-3 space-y-2">
            {links.map((link) => (
              <MobileNavLink key={link.to} to={link.to} text={link.text} icon={link.icon} />
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

function NavLink({ to, text, icon, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
        active ? 'bg-blue-700 shadow-inner' : 'hover:bg-blue-500'
      }`}
    >
      <span>{icon}</span> {text}
    </Link>
  )
}

function MobileNavLink({ to, text, icon }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300"
    >
      <span>{icon}</span> {text}
    </Link>
  )
}
