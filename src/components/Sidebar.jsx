import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaLungs, FaWind, FaLungsVirus, FaArrowDown, FaHeartbeat } from 'react-icons/fa'

export default function Sidebar() {
  const location = useLocation()

  const menuItems = [
    { name: 'Faring', path: '/faring', icon: <FaWind /> },
    { name: 'Laring', path: '/laring', icon: <FaLungsVirus /> },
    { name: 'Trakea', path: '/trakea', icon: <FaArrowDown /> },
    { name: 'Bronkus', path: '/bronkus', icon: <FaLungs /> },
    { name: 'Pulmo', path: '/pulmo', icon: <FaHeartbeat /> },
  ]

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:block w-64 bg-gradient-to-b from-white to-blue-50 shadow-xl border-r border-blue-100"
    >
      <div className="p-6">
        <h2 className="text-xl font-bold text-blue-600 mb-6 tracking-wide flex items-center gap-2">
          <FaLungs className="text-blue-500" /> Organ Respirasi
        </h2>
        <ul className="space-y-3">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path
            return (
              <motion.li
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition duration-300
                    ${
                      isActive
                        ? 'bg-blue-100 text-blue-700 shadow-inner'
                        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                    }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}
