<script setup>
// composition api
import { ref } from 'vue'
// ref function will create a reactive variable when this variable change ,
// html dom will change automatic
const count = ref(10)
const decreaseCount = () => {
  count.value === 0 ? count.value : --count.value
}
</script>

<template>
  <div class="flex justify-end p-2">
    <input type="checkbox" class="toggle" />
  </div>

  <div>
    <h1 class="text-green-500 text-2xl font-semibold font-sans tracking-widest">
      My First Counter Application
    </h1>
  </div>
  <div class="flex p-4 space-x-2 bg-white">
    <button
      v-on:click="decreaseCount"
      class="px-3 py-1 bg-red-600 rounded-lg text-white"
    >
      -
    </button>
    <p class="text-xl font-semibold">Counter: {{ count }}</p>
    <button
      @click="++count"
      class="px-3 py-1 text-white bg-green-500 rounded-lg"
    >
      +
    </button>
  </div>
</template>

<style scoped></style>
