<script setup>

</script>
 
<template>
  <div class="container p-10 ">
    <div class="header pb-2 flex justify-center">
      <div class="mb-4 text-4xl font-extrabold">NUMBER HUNTER</div>
    </div>

    <div class="head flex justify-between">
      <button class="btn btn-outline btn-primary" type="reset">RESET</button>
      <div class="countdown  text-2xl text-red-600">
        <span style="--value:40;"></span>&nbsp;s
      </div>
    </div>

    <div class="join flex justify-center">
      <table class="hanjie-table">
        <tr>
          <td class="hanjie-cell col-number"></td>
          <td class="hanjie-cell col-number">5</td>
          <td class="hanjie-cell col-number">3</td>
          <td class="hanjie-cell col-number">2</td>
          <td class="hanjie-cell col-number">6</td>
          <td class="hanjie-cell col-number">4</td>
        </tr>
        <tr>
          <td class="hanjie-cell row-number">2</td>
          <td class="hanjie-cell filled"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell filled"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell none"></td>
        </tr>
        <tr>
          <td class="hanjie-cell row-number">1 2</td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell filled"></td>
          <td class="hanjie-cell filled"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell none"></td>
        </tr>
        <tr>
          <td class="hanjie-cell row-number">6</td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell filled"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell none"></td>
        </tr>
        <tr>
          <td class="hanjie-cell row-number">2</td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell filled"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell none"></td>
        </tr>
        <tr>
          <td class="hanjie-cell row-number">3</td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell"></td>
          <td class="hanjie-cell filled"></td>
          <td class="hanjie-cell none"></td>
        </tr>
      </table>
    </div>


    <div class="flex justify-between m-5">
      <div class="hint order-first dropdown">
        <div tabindex="0" role="button" class="btn m-1">Hint !</div>
        <div tabindex="0"
          class="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
          <div class="card-body">
            <h3 class="card-title">For your hint</h3>
            <p>you can use any element as a dropdown.</p>
          </div>
        </div>
      </div>
      <div class="missed order-last">
        <div class="btn m-1 cursor-not-allowed"> Missed : ### </div>
      </div>
    </div>


    <div class="join pagination flex justify-center">
      <button class="join-item btn">«</button>
      <button class="join-item btn">Level 1</button>
      <button class="join-item btn">»</button>
    </div>

    <div class="step-container">

    </div>

  </div>
</template>

<style scoped>
.hanjie {
  border-collapse: collapse;
  margin: 20px;
}

.hanjie-cell {
  width: 70px;
  height: 70px;
  border: 1px solid #000;
  text-align: center;
}

.filled {
  background-color: #000;
}

.col-number,
.row-number,
.none {
  border: none;
}
</style>
