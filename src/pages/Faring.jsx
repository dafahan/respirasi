import { motion } from 'framer-motion'
import AnatomyDiagram from '../components/AnatomyDiagram'
import faringImage from '../assets/images/faring.PNG'
import tonsilImage from '../assets/images/tonsil.PNG'
import ototFaringImage from '../assets/images/otot faring.PNG'

export default function Faring() {
  const faringParts = [
    {
      name: 'Nasofaring',
      description: 'Bagian atas faring yang berhubungan dengan rongga hidung, setinggi C1-C2, berfungsi untuk respirasi.'
    },
    {
      name: 'Orofaring',
      description: 'Bagian tengah faring yang berhubungan dengan rongga mulut, setinggi C2-C4, berfungsi untuk pencernaan.'
    },
    {
      name: 'Laringofaring',
      description: 'Bagian bawah faring yang berhubungan dengan laring, setinggi C4-C6.'
    },
    {
      name: 'Cincin Waldeyer',
      description: 'Kumpulan jaringan limfoid yang terdiri dari tonsil faringeal, tonsil tuba, tonsil palatina, dan tonsil lingual.'
    }
  ]

  const ototFaringParts = [
    {
      name: 'Otot Konstriktor',
      description: 'Berfungsi untuk kontraksi dinding faring saat menelan. Terdiri dari konstriktor superior, media, dan inferior.'
    },
    {
      name: 'Otot Levator',
      description: 'Berfungsi untuk mengunyah dan bicara. Termasuk m. palatopharyngeus, m. salpingopharyngeus, dan m. stylopharyngeus.'
    }
  ]

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Faring</h1>
        
        <AnatomyDiagram
          title="Struktur Faring"
          image={faringImage}
          description="Faring merupakan saluran menuju esofagus setinggi basis cranii sampai C6. Faring berubah menjadi laring setinggi C4-C6."
          parts={faringParts}
        />

        <AnatomyDiagram
          title="Tonsil dan Cincin Waldeyer"
          image={tonsilImage}
          description="Tonsil berkaitan dengan sistem imun. Gabungan dari 4 tonsil disebut cincin Waldeyer."
          parts={[
            {
              name: 'Tonsil Faringeal/Adenoid',
              description: 'Berjumlah 1, terletak di nasofaring.'
            },
            {
              name: 'Tonsil Tuba',
              description: 'Berjumlah 2 (dextra et sinistra), terletak di dekat tuba auditiva.'
            },
            {
              name: 'Tonsil Palatina',
              description: 'Berjumlah 2 (dextra et sinistra), terletak di antara arkus palatofaring dan palatoglosus.'
            },
            {
              name: 'Tonsil Lingual',
              description: 'Berjumlah 1, terletak di 1/3 posterior lidah.'
            }
          ]}
        />

        <AnatomyDiagram
          title="Otot-Otot Faring"
          image={ototFaringImage}
          description="Otot faring terdiri dari otot konstriktor dan otot levator yang berperan dalam proses menelan dan berbicara."
          parts={ototFaringParts}
        />
      </motion.div>
    </div>
  )
}