import { motion } from 'framer-motion'
import CardComponent from '../components/CardComponent'

// Import gambar
import faringImage from '../assets/images/faring.PNG'
import laringImage from '../assets/images/otot faring.PNG'
import trakeaImage from '../assets/images/Trakea.PNG'
import bronkusImage from '../assets/images/Bronkus.PNG'
import bronkiolusImage from '../assets/images/Bronkiolus.PNG'
import pulmoImage from '../assets/images/Pulmo 2.PNG'
import pleuraImage from '../assets/images/Pleura 1.PNG'
import inervasiImage from '../assets/images/Inervasi Pulmo.jpg'

export default function Home() {
  const features = [
    {
      title: 'Faring',
      description: 'Saluran penghubung rongga mulut dan hidung menuju laring dan esofagus. Terdiri dari nasofaring, orofaring, dan laringofaring.',
      image: faringImage,
      link: '/respirasi/faring',
    },
    {
      title: 'Laring',
      description: 'Organ penting untuk produksi suara dan pelindung jalan napas bawah, terdiri dari kartilago dan pita suara.',
      image: laringImage,
      link: '/respirasi/laring',
    },
    {
      title: 'Trakea',
      description: 'Pipa saluran napas yang menghubungkan laring ke bronkus dan dilapisi cincin kartilago berbentuk C.',
      image: trakeaImage,
      link: '/respirasi/trakea',
    },
    {
      title: 'Bronkus',
      description: 'Cabang utama dari trakea menuju paru-paru. Dextra lebih vertikal dan lebar dibandingkan sinistra.',
      image: bronkusImage,
      link: '/respirasi/bronkus',
    },
    {
      title: 'Bronkiolus',
      description: 'Saluran napas terkecil yang mengarah ke alveolus. Tempat umum terjadinya penyempitan pada penderita asma.',
      image: bronkiolusImage,
      link: '/respirasi/bronkus', // optional: bisa buat page khusus jika ada
    },
    {
      title: 'Pulmo (Paru-paru)',
      description: 'Tempat utama pertukaran gas. Terdiri dari lobus-lobus dan segmen bronkopulmonal yang berbeda antara kanan dan kiri.',
      image: pulmoImage,
      link: '/respirasi/pulmo',
    },
    {
      title: 'Pleura',
      description: 'Lapisan pelindung paru-paru yang terdiri dari pleura parietal dan viseral, menghasilkan cairan pelumas.',
      image: pleuraImage,
      link: '/respirasi/pulmo', // optional
    },
    {
      title: 'Inervasi Pulmonalis',
      description: 'Sistem saraf simpatis dan parasimpatis yang mengontrol fungsi paru seperti bronkokonstriksi dan vasodilatasi.',
      image: inervasiImage,
      link: '/respirasi/pulmo', // optional
    },
  ]

  return (
    <div className="section-container py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sistem Respirasi Manusia</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Pelajari struktur dan fungsi organ-organ sistem pernapasan manusia secara visual dan interaktif.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <CardComponent {...feature} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
