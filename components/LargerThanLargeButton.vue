<template>
    <div>
      <button class="w-96 h-96 rotate-45 border-2 border-black bg-neutral-300">
        <p>{{ text }}</p>
      </button>
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
    