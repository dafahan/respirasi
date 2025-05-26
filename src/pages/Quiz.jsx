import { useState } from 'react'
import { motion } from 'framer-motion'
import { quizQuestions } from '../data/quizQuestions'

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId)
  }

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    
    setSelectedOption(null)
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setScore(0)
    setShowResult(false)
  }

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quiz Sistem Respirasi</h1>
        
        {showResult ? (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Hasil Quiz</h2>
            <p className="text-lg mb-6">Skor Anda: {score} dari {quizQuestions.length}</p>
            <button
              onClick={resetQuiz}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Ulangi Quiz
            </button>
          </motion.div>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Pertanyaan {currentQuestion + 1}/{quizQuestions.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  Skor: {score}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-600 h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-6">
              {quizQuestions[currentQuestion].question}
            </h2>

            <div className="space-y-3 mb-8">
              {quizQuestions[currentQuestion].options.map((option) => (
                <motion.div
                  key={option.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition ${
                    selectedOption === option.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {option.text}
                </motion.div>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              disabled={selectedOption === null}
              className={`w-full py-3 px-4 rounded-lg font-medium ${
                selectedOption === null
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentQuestion < quizQuestions.length - 1 ? 'Pertanyaan Berikutnya' : 'Lihat Hasil'}
            </button>
          </>
        )}
      </motion.div>
    </div>
  )
}