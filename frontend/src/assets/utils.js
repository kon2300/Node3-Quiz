import { reactive, toRefs } from 'vue'
import axios from 'axios'
import _ from 'lodash'

export default function loadData() {
  const state = reactive({
    apiData: null,
    error: null,
    quizNum: 0,
    numOfCorrectAnswer: 0,
    quizData: null,
    questionData: null,
    startIsShow: true,
    quizIsShow: false,
    finishIsShow: false,
    reStartIsShow: false,
  })

  // APIからデータを取得
  const fetchData = async () => {
    try {
      const url = 'http://localhost:3000/api/index'
      const res = await axios.get(url)
      state.apiData = await res.data.quizzes
      createQuiz()
    } catch (e) {
      state.error = e
    }
  }

  // スタートボタンの動作
  const startQuiz = () => {
    state.startIsShow = false
    state.quizIsShow = true
    state.finishIsShow = false
    state.reStartIsShow = false
    state.numOfCorrectAnswer = 0
    state.quizNum = 0
    createQuiz()
  }

  // クイズの作成
  const createQuiz = (index) => {
    if (state.quizNum >= state.apiData.length) {
      checkTheAnswer(index)
      finishQuiz()
    } else {
      state.quizData = state.apiData[state.quizNum]
      state.questionData = _.shuffle([
        state.apiData[state.quizNum].correct_answer,
        ...state.apiData[state.quizNum].incorrect_answers,
      ])
      checkTheAnswer(index)
      state.quizNum++
    }
  }

  // 正答確認
  const checkTheAnswer = (index) => {
    if (state.quizNum === 10) state.quizNum = 9
    if (
      state.apiData[state.quizNum].correct_answer === state.questionData[index]
    ) {
      return state.numOfCorrectAnswer++
    }
  }

  // 最後の問題回答後の動作
  const finishQuiz = () => {
    state.quizIsShow = false
    state.finishIsShow = true
    state.reStartIsShow = true
  }

  const reStart = () => {
    location.reload()
  }

  return {
    ...toRefs(state),
    fetchData,
    startQuiz,
    createQuiz,
    reStart,
  }
}
