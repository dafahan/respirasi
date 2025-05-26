import { motion } from 'framer-motion'
import AnatomyDiagram from '../components/AnatomyDiagram'
import laringImage from '../assets/images/otot faring.PNG'

export default function Laring() {
  const laringParts = [
    {
      name: 'Kartilago Laring',
      description: 'Terdiri dari kartilago tunggal (tiroid, krikoid, epiglotis) dan ganda (aritenoid, kornikulata, kuneiform).'
    },
    {
      name: 'Ligamentum Laring',
      description: 'Termasuk membrana tirohioid, membrana krikotiroid, dan ligamen krikotrakeal.'
    },
    {
      name: 'Ruang Laring',
      description: 'Cavitas supraglottic, transglottic, dan subglottic.'
    },
    {
      name: 'Plica Laring',
      description: 'Plica vestibularis (protektif) dan plica vocalis (penghasil suara).'
    }
  ]

  const ototLaringParts = [
    {
      name: 'M. Cricothyroideus',
      description: 'Inervasi: N. vagus. Fungsi: meregangkan dan menegangkan ligamentum vocale.'
    },
    {
      name: 'M. Thyroarytenoideus',
      description: 'Inervasi: N. vagus. Fungsi: relaksasi ligamentum vocale.'
    },
    {
      name: 'M. Cricoarytenoideus posterior',
      description: 'Inervasi: N. vagus. Fungsi: abduksi plica vocalis.'
    },
    {
      name: 'M. Cricoarytenoideus lateralis',
      description: 'Inervasi: N. vagus. Fungsi: adduksi plica vocalis.'
    }
  ]

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Laring</h1>
        
        <AnatomyDiagram
          title="Struktur Laring"
          image={laringImage}
          description="Laring adalah organ yang berperan dalam produksi suara dan melindungi jalan napas bawah. Terletak setinggi C4-C6."
          parts={laringParts}
        />

        <div className="diagram-container">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Vaskularisasi Laring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Arteri</h3>
              <ul className="space-y-2">
                <li>A. thyroidea superior → A. laryngea superior & A. cricothyroidea</li>
                <li>A. thyroidea inferior → A. laryngea inferior</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Vena</h3>
              <ul className="space-y-2">
                <li>V. laryngea superior → V. thyroidea superior → VJI</li>
                <li>V. laryngea inferior → V. thyroidea inferior → V. brachiocephalica sinistra</li>
              </ul>
            </div>
          </div>
        </div>

        <AnatomyDiagram
          title="Otot-Otot Laring"
          image={laringImage}
          description="Otot laring berperan dalam menggerakkan kartilago laring untuk produksi suara dan proteksi jalan napas."
          parts={ototLaringParts}
        />
      </motion.div>
    </div>
  )
}