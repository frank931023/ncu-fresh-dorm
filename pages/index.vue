<template>
  <div class="flex items-center justify-around h-screen">
    <div
      class="flex flex-col items-center text-center"
      v-for="(dorm, index) in info.dorm"
      :key="index"
    >
      <NuxtLink :to="`/dorm/${index + 1}`">
        <SquareButton :text="dorm.name" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import information from "/assets/information.json";

const info = reactive(information);
</script>