import { motion } from 'framer-motion'
import AnatomyDiagram from '../components/AnatomyDiagram'
import pulmo1Image from '../assets/images/Pulno 1.PNG'
import pulmo2Image from '../assets/images/Pulmo 2.PNG'
import pleura1Image from '../assets/images/Pleura 1.PNG'
import pleura2Image from '../assets/images/Pleura 2.PNG'

export default function Pulmo() {
  const pulmoParts = [
    {
      name: 'Apex Pulmo',
      description: 'Bagian superior yang menonjol sampai apertura thoracis superior.'
    },
    {
      name: 'Basis Pulmo',
      description: 'Bagian inferior yang menghadap diafragma.'
    },
    {
      name: 'Facies',
      description: 'Costalis (hadap costae), mediastinalis (hadap mediastinum), diaphragmatica (hadap diafragma).'
    },
    {
      name: 'Incisura Cardiaca',
      description: 'Cekungan di pulmo sinistra untuk jantung.'
    }
  ]

  const perbedaanPulmo = [
    {
      title: 'Lobus',
      content: [
        'Dextra: 3 lobus (superior, medius, inferior)',
        'Sinistra: 2 lobus (superior, inferior)'
      ]
    },
    {
      title: 'Fissura',
      content: [
        'Dextra: fissura obliqua dan horizontalis',
        'Sinistra: hanya fissura obliqua'
      ]
    },
    {
      title: 'Segmen',
      content: [
        'Dextra: 10 segmen',
        'Sinistra: 8-9 segmen'
      ]
    },
    {
      title: 'Lingula Pulmonalis',
      content: [
        'Dextra: tidak ada',
        'Sinistra: ada, perpanjangan lobus superior'
      ]
    }
  ]

  const vaskularisasi = [
    {
      title: 'Sirkulasi Fungsional',
      content: [
        'Arteri Pulmonalis: darah tidak beroksigen dari ventrikel kanan',
        'Vena Pulmonalis: darah beroksigen ke atrium kiri (4 vena)'
      ]
    },
    {
      title: 'Sirkulasi Nutritif',
      content: [
        'Arteri Bronkialis: dari aorta thoracica (nutrisi jaringan paru)',
        'Vena Bronkialis: ke v. azygos/hemiazygos'
      ]
    }
  ]

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Pulmo (Paru-Paru)</h1>
        
        <AnatomyDiagram
          title="Struktur Pulmo"
          image={pulmo1Image}
          description="Pulmo adalah organ utama sistem pernapasan tempat terjadinya pertukaran gas oksigen dan karbon dioksida."
          parts={pulmoParts}
        />

        <div className="diagram-container">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Perbedaan Pulmo Dextra dan Sinistra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {perbedaanPulmo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="font-semibold text-blue-700 mb-2">{item.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {item.content.map((point, i) => (
                    <li key={i} className="text-gray-700 text-sm">{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <AnatomyDiagram
          title="Vaskularisasi Pulmo"
          image={pulmo2Image}
          description="Paru memiliki dua sistem vaskularisasi: sirkulasi fungsional untuk pertukaran gas dan sirkulasi nutritif untuk nutrisi jaringan."
          parts={vaskularisasi.map(item => ({
            name: item.title,
            description: item.content.join(' | ')
          }))}
        />

        <AnatomyDiagram
          title="Pleura"
          image={pleura1Image}
          description="Pleura adalah membran serosa yang melapisi paru (visceral) dan rongga toraks (parietal)."
          parts={[
            {
              name: 'Pleura Visceralis',
              description: 'Langsung melapisi paru, memberikan sensasi licin.'
            },
            {
              name: 'Pleura Parietalis',
              description: 'Melapisi dinding toraks, menghasilkan cairan serosa.'
            },
            {
              name: 'Cavitas Pleura',
              description: 'Ruang antara kedua pleura berisi cairan pelumas.'
            }
          ]}
        />
      </motion.div>
    </div>
  )
}