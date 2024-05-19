<template>
  <div>
    <button @click="goBackToIndex" class="border-black bg-slate-300">
      Go back to index page
    </button>

    <h1>Hello, this is dorm index</h1>
    <!-- <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias beatae
      odit laudantium tempore accusantium ut, dignissimos error cupiditate nisi
      labore vel quasi obcaecati consequatur accusamus corrupti cum officiis
      optio magni impedit corporis! Architecto itaque atque, sapiente
      necessitatibus numquam ab, deleniti temporibus nesciunt, praesentium
      laborum assumenda recusandae in adipisci error sed.
    </p> -->
  </div>
</template>

<script>
export default {
  methods: {
    goBackToIndex() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>