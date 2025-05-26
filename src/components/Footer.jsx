import { FaGithub, FaEnvelope, FaInfoCircle } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-8 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand & Description */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              🫁 Sistem Respirasi
            </h3>
            <p className="text-blue-200 mt-1 text-sm">
              Edukasi anatomi sistem pernapasan manusia secara interaktif.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="flex items-center gap-2 text-blue-200 hover:text-white transition">
              <FaInfoCircle /> Tentang
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-200 hover:text-white transition">
              <FaEnvelope /> Kontak
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-200 hover:text-white transition">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-blue-700 text-center text-blue-300 text-xs tracking-wide">
          © {new Date().getFullYear()} Sistem Respirasi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
