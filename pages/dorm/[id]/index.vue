<template>
  <div>
    <h1>This is dorm {{ id }}</h1>
  </div>

  <div>
    <button @click="goBackToIndex" class="border-black bg-slate-300">
      Go back to index page
    </button>

    <NuxtLink
      v-for="(button, index) in buttons"
      :key="index"
      :to="button.link"
    >
      <LargeButton :text="button.text" :class="button.position" />
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
  methods: {
    goBackToIndex() {
      this.$router.push("/");
    },
    details(order) {
      const detail = info.dorm[this.id].amenities[order].id;
      // console.log('detail:', detail);
      return detail;
    },
    text(order) {
      const text = info.dorm[this.id].amenities[order].name;
      // console.log('text:', text);
      return text;
    },
    link(detail) {
      const link = `/dorm/${this.id}/${detail}`;
      // console.log('link:', link);
      return link;
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    buttons() {
      return [
        {
          text: this.text(0),
          details: this.details(0),
          link: this.link(this.details(0)),
          position: "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2",
        },
        {
          text: this.text(1),
          details: this.details(1),
          link: this.link(this.details(1)),
          position: "absolute top-1/2 left-1/3 -translate-x-1/4 -translate-y-1/2",
        },
        {
          text: this.text(2),
          details: this.details(2),
          link: this.link(this.details(2)),
          position: "absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        },
        {
          text: this.text(3),
          details: this.details(3),
          link: this.link(this.details(3)),
          position: "absolute top-1/2 left-2/3 -translate-x-3/4 -translate-y-1/2"
        }
      ]
    }
  },
};
</script>