<template>
  <div>
    <h1>This is dorm {{ id }}</h1>
    <!-- <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iste
        harum voluptates hic molestiae quos atque excepturi voluptatem dignissimos
        numquam!
      </p> -->
  </div>

  <div>
    <button @click="goBackToIndex" class="border-black bg-slate-300">
      Go back to index page
    </button>

    <!-- <LargeButton
        route="/dorm/1/details"
        :text="myText1"
        class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
      /> -->

    <NuxtLink :to="`/dorm/${id}/details`">
      <LargeButton
        :text="myText1"
        class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </NuxtLink>

    <!-- <LargeButton
        route="/dorm/2/details"
        :text="myText2"
        class="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2"
      />
      <LargeButton
        route="/dorm/3/details"
        :text="myText3"
        class="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <LargeButton
        route="/dorm/4/details"
        :text="myText4"
        class="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2"
      /> -->
  </div>
</template>
    
  <script>
import LargeButton from "~/components/LargeButton.vue";

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
  },
};
</script>