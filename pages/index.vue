<template>
  <div class="flex items-center justify-around h-screen">
    <div class="flex flex-col items-center text-center">
      <SquareButton :route="'/dorm/1'" :text="info.dorm[0].name" />
    </div>
    <div class="flex flex-col items-center text-center">
      <SquareButton :route="'/dorm/2'" :text="info.dorm[1].name" />
    </div>
    <div class="flex flex-col items-center text-center">
      <SquareButton :route="'/dorm/3'" text="女二" />
    </div>
    <div class="flex flex-col items-center text-center">
      <SquareButton :route="'/dorm/4'" text="女四" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import information from "/assets/information.json";

const info = reactive(information);
</script>