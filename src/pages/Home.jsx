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
      description:
        'Saluran penghubung rongga mulut dan hidung menuju laring dan esofagus. Terdiri dari nasofaring, orofaring, dan laringofaring.',
      image: faringImage,
      link: '/faring',
    },
    {
      title: 'Laring',
      description:
        'Organ penting untuk produksi suara dan pelindung jalan napas bawah, terdiri dari kartilago dan pita suara.',
      image: laringImage,
      link: '/laring',
    },
    {
      title: 'Trakea',
      description:
        'Pipa saluran napas yang menghubungkan laring ke bronkus dan dilapisi cincin kartilago berbentuk C.',
      image: trakeaImage,
      link: '/trakea',
    },
    {
      title: 'Bronkus',
      description:
        'Cabang utama dari trakea menuju paru-paru. Dextra lebih vertikal dan lebar dibandingkan sinistra.',
      image: bronkusImage,
      link: '/bronkus',
    },
    {
      title: 'Bronkiolus',
      description:
        'Saluran napas terkecil yang mengarah ke alveolus. Tempat umum terjadinya penyempitan pada penderita asma.',
      image: bronkiolusImage,
      link: '/bronkus',
    },
    {
      title: 'Pulmo (Paru-paru)',
      description:
        'Tempat utama pertukaran gas. Terdiri dari lobus-lobus dan segmen bronkopulmonal yang berbeda antara kanan dan kiri.',
      image: pulmoImage,
      link: '/pulmo',
    },
    {
      title: 'Pleura',
      description:
        'Lapisan pelindung paru-paru yang terdiri dari pleura parietal dan viseral, menghasilkan cairan pelumas.',
      image: pleuraImage,
      link: '/pulmo',
    },
    {
      title: 'Inervasi Pulmonalis',
      description:
        'Sistem saraf simpatis dan parasimpatis yang mengontrol fungsi paru seperti bronkokonstriksi dan vasodilatasi.',
      image: inervasiImage,
      link: '/pulmo',
    },
  ]

  return (
    <div className="section-container py-12 px-4">
      {/* Header */}
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

      {/* 3D Viewer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-md"
      >
        <div className="aspect-video w-full">
          <iframe
            title="Respiratory_System(Lungs)"
            frameBorder="0"
            allowFullScreen
            mozAllowFullScreen="true"
            webkitAllowFullScreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/066a1eafdcf54865b4c6b8688dac5834/embed"
            className="w-full h-full"
          />
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          3D model by{' '}
          <a
            href="https://sketchfab.com/grvgtm664"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Manish Gautam
          </a>{' '}
          on{' '}
          <a
            href="https://sketchfab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Sketchfab
          </a>
        </p>
      </motion.div>

      {/* Feature Cards */}
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
