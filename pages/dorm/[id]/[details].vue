<template>
  <div>
    <h1>Hello, this is {{ details }} for Dorm {{ id }}</h1>
    <button @click="goBackToIndex" class="border-black bg-slate-300">
      Go back to index page
    </button>

    <BaseCard class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

  </div>
</template>
  
  <script>
export default {
  methods: {
    goBackToIndex() {
      this.$router.push("/");
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    details() {
      return this.$route.params.details;
    },
  },
};
</script>