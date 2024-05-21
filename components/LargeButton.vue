<template>
  <div>
    <div
      class="w-64 h-64 rotate-45 border-2 border-black bg-neutral-300 flex items-center justify-center"
    >
      <p class="-rotate-45">{{ text }}</p>
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
  