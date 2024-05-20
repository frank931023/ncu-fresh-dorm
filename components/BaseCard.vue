<template>
  <div
    class="w-96 h-96 rotate-45 border-2 border-black bg-neutral-300 flex items-center justify-center"
  >
  </div>
</template>
    
<script>
import { ref, reactive } from "vue";
import information from "/assets/information.json";

const info = reactive(information);

export default {
  // Your component logic goes here\
};
</script>
    
    <style scoped>
/* Any additional styles specific to this component */
</style>
    