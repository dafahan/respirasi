export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Sistem Respirasi</h3>
              <p className="text-gray-400 mt-1">Belajar anatomi sistem pernapasan manusia</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Tentang
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Kontak
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Privasi
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Sistem Respirasi. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }