<template>
  <div>
    <button
      class="w-64 h-64 rotate-45 border-2 border-black bg-neutral-300"
      @click="handleClick"
    >
      <p>{{ text }}</p>
    </button>
  </div>
</template>
  
  <script>
export default {
  // Your component logic goes here
  props: ["text"],
  methods: {
    handleClick() {
      // this.$router.push("/dorm/1/details");
      alarm("You click the button!");
    },
  },
};
</script>
  
  <style scoped>
/* Any additional styles specific to this component */
</style>
  