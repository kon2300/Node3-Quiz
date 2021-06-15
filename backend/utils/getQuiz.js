const fetch = require('node-fetch')

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'

class Quiz {
  constructor(quizData) {
    this.quizzes = quizData.results
    this.correctAnswerNum = 0
  }
  getQuizCategory(index) {
    return this.quizzes[index - 1].category
  }
  getQuizDifficulty(index) {
    return this.quizzes[index - 1].difficulty
  }
  getQuizQuestion(index) {
    return this.quizzes[index - 1].question
  }
  getNumQuiz() {
    return this.quizzes.length
  }
  getCorrectAnswer(index) {
    return this.quizzes[index - 1].correct_answer
  }
  getIncorrectAnswers(index) {
    return this.quizzes[index - 1].incorrect_answers
  }
  countCorrectAnswerSum(index, answer) {
    const correctAnswer = this.quizzes[index - 1].correct_answer
    if (answer === correctAnswer) {
      return this.correctAnswerNum++
    }
  }
  getCorrectAnswerSum() {
    return this.correctAnswerNum
  }
}

// APIからクイズデータを取得
const fetchQuizData = async () => {
  const response = await fetch(API_URL)
  const quizData = await response.json()
  const quizInstance = new Quiz(quizData)
  return quizInstance
}

module.exports = { fetchQuizData }
