import { motion } from 'framer-motion'
import CardComponent from '../components/CardComponent'
import faringImage from '../assets/images/faring.PNG'
import laringImage from '../assets/images/otot faring.PNG'
import pulmoImage from '../assets/images/Pulmo 2.PNG'

export default function Home() {
  const features = [
    {
      title: 'Faring',
      description: 'Saluran yang menghubungkan rongga hidung dan mulut ke laring dan esofagus.',
      image: faringImage,
      link: '/faring',
    },
    {
      title: 'Laring',
      description: 'Organ yang berperan dalam produksi suara dan melindungi jalan napas bawah.',
      image: laringImage,
      link: '/laring',
    },
    {
      title: 'Pulmo',
      description: 'Organ utama sistem pernapasan tempat terjadinya pertukaran gas.',
      image: pulmoImage,
      link: '/pulmo',
    },
  ]

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sistem Respirasi Manusia</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pelajari struktur dan fungsi organ-organ sistem pernapasan manusia secara interaktif.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <CardComponent {...feature} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}