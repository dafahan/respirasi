import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Sidebar() {
  const menuItems = [
    { name: 'Faring', path: '/faring' },
    { name: 'Laring', path: '/laring' },
    { name: 'Trakea', path: '/trakea' },
    { name: 'Bronkus', path: '/bronkus' },
    { name: 'Pulmo', path: '/pulmo' },
  ]

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:block w-64 bg-white shadow-md"
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Organ Respirasi</h2>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={item.path}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition duration-300"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}