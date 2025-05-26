import { motion } from 'framer-motion'
import AnatomyDiagram from '../components/AnatomyDiagram'
import trakeaImage from '../assets/images/Trakea.PNG'

export default function Trakea() {
  const trakeaParts = [
    {
      name: 'Struktur',
      description: 'Tersusun atas kartilago berbentuk huruf C dengan m. trachealis di bagian belakang.'
    },
    {
      name: 'Letak',
      description: 'Mulai di C6, masuk ke mediastinum setinggi angulus sternalis (T5), bercabang menjadi bronkus utama di karina.'
    },
    {
      name: 'Inervasi',
      description: 'N. pharyngeal recurrens'
    },
    {
      name: 'Vaskularisasi',
      description: 'Arteri: R. trachealis A. tiroid inferior. Vena: bermuara ke v. hemiazigos → v. azygos → v. brachiocephalica.'
    }
  ]

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Trakea</h1>
        
        <AnatomyDiagram
          title="Struktur Trakea"
          image={trakeaImage}
          description="Trakea adalah tabung yang menghubungkan laring dengan bronkus utama. Terdiri dari cincin tulang rawan yang menjaga patensi jalan napas."
          parts={trakeaParts}
        />

        <div className="diagram-container">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Histologi Trakea</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Lapisan</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Tunika mukosa: epitel respirasi bersilia dengan sel goblet</li>
                <li>Tunika submukosa: jaringan ikat dengan kelenjar seromukosa</li>
                <li>Tunika adventitia: kartilago hialin dan jaringan ikat</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Fungsi</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Menghantarkan udara ke bronkus</li>
                <li>Membersihkan udara melalui silia dan mukus</li>
                <li>Mempertahankan patensi jalan napas</li>
                <li>Pencegahan aspirasi saat menelan</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}