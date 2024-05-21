<template>
  <div class="grid grid-cols-2 gap-40">
    <div
      class="w-96 h-96 rotate-45 border-2 border-black bg-neutral-300 flex items-center justify-center"
    ></div>
    <div class="w-96 h-96 border-2 border-black bg-white flex p-5">
      <h1>{{ text }}</h1>
      <!-- <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea labore
        natus est architecto asperiores molestiae ipsa, corrupti temporibus
        magnam optio dolorem magni culpa unde quaerat qui quo debitis ullam
        ducimus sequi omnis. Quis quasi temporibus a aut nemo, cum ex id vitae
        minima laborum quaerat, ratione ea dicta. Ullam, iusto?
      </p> -->
    </div>
  </div>
</template>
    
<script>
export default {
  // Your component logic goes here
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
    
<style scoped>
/* Any additional styles specific to this component */
</style>
    

