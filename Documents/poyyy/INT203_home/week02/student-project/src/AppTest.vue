<script setup>
// import from outside
import SearchIcon from "./components/icons/SearchIcon.vue";
const msg = '<span class="italic">Hello , v-text</span>';
const headingFont = "text-xl font-bold";
const isShow = true;
const scores = 60;

function getToday(x) {
  return "test calling" + `${msg.toUpperCase()}` + new Date(Date.now);
}
</script>

<template>
  <div class="w-full">
    <header>
      <section
        class="flex items-center p-2 bg-gradient-to-r from-purple-500 to-pink-500"
      >
        <img src="./assets/vue-icon.png" class="h-14 p-1" />
        <div class="">
          <h1 class="text-white text-4xl font-semibold">creative Project</h1>
          <div class="italic text-yellow-50">Play and learn</div>
        </div>
      </section>
    </header>
    <main>
      <section class="flex justify-end pt-2">
        <div
          class="w-1/4 flex items-center gap-3 border border-gray-300 p-1 rounded-lg"
        >
          <SearchIcon />
          <input
            class="outline-none"
            type="text"
            placeholder="type your keyword..."
          />
        </div>
      </section>
    </main>
    <section>
      <h1>{{ getToday(msg).toLowerCase() }}</h1>

      <!--V-TEXT follow by text that js can access , like variable named 'msg' in js-->
      <p :class="headingFont">Hello , {{ msg.toUpperCase() }} , Goodbye</p>
      <!--v-text will override element children-->
      <!--v-html read each by html , use with html tag-->
      <!--v-bind use only html attributes-->
      <button
        v-if="isShow"
        class="px-3 py-2 bg-green-700 text-white rounded-xl"
        :disabled="true"
      >
        Preview
      </button>

      <div class="test text-semibold bg-slate-200">
        <p v-if="scores >= 80">A</p>
        <p v-else-if="(scores <= 80) & (scores > 70)">B</p>
        <p v-else>F</p>
      </div>

      <p v-for="x in 10" >{{ x }}</p>
      <!-- dont forget v-for will loop in tag-->

    </section>
  </div>
</template>

<style scoped></style>