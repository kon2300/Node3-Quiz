<template>
  <div class="quizBox">
    <div v-if="error">{{ error }}</div>
    <div v-show="finishIsShow">
      <h2>あなたの正答数は{{ numOfCorrectAnswer }}です!!</h2>
      <hr />
      <h3>再度チャレンジしたい場合は以下をクリック!!</h3>
      <hr />
    </div>
    <div v-show="reStartIsShow">
      <button @click="reStart()">ホームに戻る!</button>
    </div>
    <div v-show="startIsShow">
      <button @click="startQuiz()">クイズに挑戦する!!</button>
    </div>
    <div v-show="quizIsShow">
      <h2>問題{{ quizNum }}</h2>
      <h3>[ジャンル]{{ quizData.category }}</h3>
      <h3>[難易度]{{ quizData.difficulty }}</h3>
      <hr />
      <h3>{{ quizData.question }}</h3>
      <hr />
      <ul>
        <li>
          <button @click="createQuiz(0)">{{ questionData[0] }}</button>
        </li>
        <li>
          <button @click="createQuiz(1)">{{ questionData[1] }}</button>
        </li>
        <li>
          <button @click="createQuiz(2)">{{ questionData[2] }}</button>
        </li>
        <li>
          <button @click="createQuiz(3)">{{ questionData[3] }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import loadData from '../assets/utils'

export default {
  name: 'quizBox',
  async setup() {
    const {
      error,
      finishIsShow,
      reStartIsShow,
      startIsShow,
      quizIsShow,
      quizNum,
      numOfCorrectAnswer,
      quizData,
      questionData,
      fetchData,
      startQuiz,
      createQuiz,
      reStart,
    } = loadData()

    await fetchData()

    return {
      error,
      finishIsShow,
      reStartIsShow,
      startIsShow,
      quizIsShow,
      quizNum,
      numOfCorrectAnswer,
      quizData,
      questionData,
      startQuiz,
      createQuiz,
      fetchData,
      reStart,
    }
  },
}
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
