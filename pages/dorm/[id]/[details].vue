<template>
  <div>
    <h1>Hello, this is {{ details }} for Dorm {{ id }}</h1>
    <button @click="goBackToIndex" class="border-black bg-slate-300">
      Go back to index page
    </button>

    <BaseCard
      :text="text"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  </div>
</template>
  
<script>
import { ref, reactive } from "vue";
import information from "/assets/information.json";

const info = reactive(information);
export default {
  methods: {
    goBackToIndex() {
      this.$router.push("/");
    },
    
    // here is not working
    text() {
      const index = this.id - 1;
      const dorm = info.dorm[index];
      const amenity = dorm.amenities.find(a => a.id === this.details);
      return amenity.description;
    }
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