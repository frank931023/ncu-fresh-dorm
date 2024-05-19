<template>
  <div>
    <h1>This is dorm {{ id }}</h1>
  </div>

  <div>
    <button @click="goBackToIndex" class="border-black bg-slate-300">
      Go back to index page
    </button>

    <NuxtLink :to="`/dorm/${this.id}/${this.details}`">
      <LargeButton
        :text="this.text"
        class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </NuxtLink>

    <NuxtLink :to="`/dorm/${id}/details`">
      <LargeButton
        :text="myText2"
        class="absolute top-1/2 left-1/3 -translate-x-1/4 -translate-y-1/2"
      />
    </NuxtLink>

    <NuxtLink :to="`/dorm/${id}/details`">
      <LargeButton
        :text="myText3"
        class="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </NuxtLink>

    <NuxtLink :to="`/dorm/${id}/details`">
      <LargeButton
        :text="myText4"
        class="absolute top-1/2 left-2/3 -translate-x-3/4 -translate-y-1/2"
      />
    </NuxtLink>
  </div>
</template>
    
<script>
import LargeButton from "~/components/LargeButton.vue";
import { ref, reactive } from "vue";
import information from "/assets/information.json";

const info = reactive(information);

export default {
  components: { LargeButton },
  data() {
    return {
      myText1: "top",
      myText2: "left",
      myText3: "bottom",
      myText4: "right",
    };
  },
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
      return info.dorm[this.id].amenities[0].id;
    },
    text() {
      return info.dorm[this.id].amenities[0].name;
    },
    // details(order) {
    //   return info.dorm[this.id].amenities[this.order].id;
    // },
    // text(order) {
    //   return info.dorm[this.id].amenities[this.order].name;
    // },
    // link() {
    //   return `/dorm/${this.id}/${this.details}`;
    // },
    // cssHere() {
    // }
  },
};
</script>