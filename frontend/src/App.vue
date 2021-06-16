<template>
  <div id="app">
    <div v-if="error">{{ error }}</div>
    <Suspense>
      <template #default>
        <QuizBox />
      </template>
      <template #fallback> 取得中... 少々お待ち下さい... </template>
    </Suspense>
  </div>
</template>

<script>
import { onErrorCaptured, ref } from 'vue'
import QuizBox from './components/quizBox'
export default {
  name: 'App',
  components: {
    QuizBox,
  },
  setup() {
    const error = ref(null)

    onErrorCaptured((e) => {
      error.value = e
    })
    return {
      error,
    }
  },
}
</script>
