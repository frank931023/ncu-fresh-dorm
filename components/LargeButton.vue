<template>
  <div>
    <div
      class="w-64 h-64 rotate-45 border-2 border-black bg-neutral-300 flex items-center justify-center"
    >
      <p>{{ text }}</p>
    </div>
  </div>
</template>
  
  <script>
export default {
  // Your component logic goes here
  props: ["text"],
};
</script>
  
  <style scoped>
/* Any additional styles specific to this component */
</style>
  