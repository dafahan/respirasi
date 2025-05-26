import { motion } from 'framer-motion'
import AnatomyDiagram from '../components/AnatomyDiagram'
import respiratorySystemImage from '../assets/images/Pulno 1.PNG'

export default function Anatomy() {
  const respiratoryParts = [
    {
      name: 'Saluran Pernapasan Atas',
      description: 'Termasuk hidung, rongga hidung, sinus paranasal, dan faring.'
    },
    {
      name: 'Saluran Pernapasan Bawah',
      description: 'Termasuk laring, trakea, bronkus, bronkiolus, dan alveoli.'
    },
    {
      name: 'Pertukaran Gas',
      description: 'Terjadi di alveoli antara udara dan darah melalui membran respirasi.'
    },
    {
      name: 'Mekanika Pernapasan',
      description: 'Proses inspirasi dan ekspirasi yang melibatkan diafragma dan otot interkostal.'
    }
  ]

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Anatomi Sistem Respirasi</h1>
        
        <AnatomyDiagram
          title="Struktur Sistem Pernapasan"
          image={respiratorySystemImage}
          description="Sistem pernapasan manusia terdiri dari saluran udara dan paru-paru yang memungkinkan pertukaran gas antara tubuh dan lingkungan. Sistem ini dibagi menjadi saluran pernapasan atas dan bawah."
          parts={respiratoryParts}
        />
      </motion.div>
    </div>
  )
}