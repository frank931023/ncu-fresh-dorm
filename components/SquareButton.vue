<template>
  <div>
    <button
      class="w-32 h-32 rotate-45 border-2 border-black bg-neutral-300"
      @click="handleClick"
    >
      <p class="-rotate-45">{{ text }}</p>
    </button>
  </div>
</template>
  
  <script>
export default {
  // Your component logic goes here
  props: ["route", "text"],
  methods: {
    handleClick() {
      this.$router.push(this.route);
    },
  },
};
</script>
  
  <style scoped>
/* Any additional styles specific to this component */
</style>
  