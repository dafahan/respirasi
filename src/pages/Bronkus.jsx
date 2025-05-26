import { motion } from 'framer-motion'
import AnatomyDiagram from '../components/AnatomyDiagram'
import bronkusImage from '../assets/images/Bronkus.PNG'
import bronkiolusImage from '../assets/images/Bronkiolus.PNG'

export default function Bronkus() {
  const bronkusParts = [
    {
      name: 'Bronkus Primer',
      description: 'Bronkus principalis dextra et sinistra. Percabangan pertama setelah trakea.'
    },
    {
      name: 'Bronkus Sekunder',
      description: 'Bronkus lobaris. Dextra: 3 cabang (superior, media, inferior). Sinistra: 2 cabang (superior, inferior).'
    },
    {
      name: 'Bronkus Tersier',
      description: 'Bronkus segmentalis, menyuplai segment bronchopulmonal.'
    }
  ]

  const perbedaanBronkus = [
    {
      name: 'Bronkus Dextra',
      description: 'Lebih vertikal (25°), lebih lebar, bercabang di luar paru (T6), lebih rentan aspirasi benda asing.'
    },
    {
      name: 'Bronkus Sinistra',
      description: 'Lebih horizontal (45°), lebih sempit, masuk hilus (T5), bercabang di dalam paru.'
    }
  ]

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Bronkus dan Bronkiolus</h1>
        
        <AnatomyDiagram
          title="Struktur Bronkus"
          image={bronkusImage}
          description="Bronkus adalah percabangan trakea yang menghantarkan udara ke paru-paru. Terdiri dari bronkus primer, sekunder, dan tersier."
          parts={bronkusParts}
        />

        <div className="diagram-container">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Perbedaan Bronkus Dextra dan Sinistra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {perbedaanBronkus.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="font-semibold text-lg text-blue-700 mb-3">{item.name}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <AnatomyDiagram
          title="Bronkiolus"
          image={bronkiolusImage}
          description="Bronkiolus adalah percabangan bronkus yang tidak lagi mengandung kartilago. Terdiri dari bronkiolus terminalis dan respiratorius."
          parts={[
            {
              name: 'Bronkiolus Terminalis',
              description: 'Percabangan terakhir sebelum alveoli, tidak memiliki kelenjar dan silia.'
            },
            {
              name: 'Bronkiolus Respiratorius',
              description: 'Memiliki alveoli di dindingnya, tempat awal pertukaran gas.'
            }
          ]}
        />
      </motion.div>
    </div>
  )
}