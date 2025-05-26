import { motion } from 'framer-motion'

export default function AnatomyDiagram({ title, image, description, parts }) {
  return (
    <div className="diagram-container">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-md" />
        </motion.div>
        <div className="lg:w-1/2">
          <p className="text-gray-700 mb-6">{description}</p>
          <div className="space-y-4">
            {parts.map((part, index) => (
              <motion.div
                key={index}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-50 p-4 rounded-lg"
              >
                <h4 className="font-semibold text-blue-800">{part.name}</h4>
                <p className="text-gray-700">{part.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}