<template>
  <div>
    <transition :name="transitionName">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    transitionName() {
      return this.$route.name.startsWith("dorm-") ? "slide-down" : "default";
    },
  },
};
</script>

<style>
.slide-down-enter-active {
  transition: all 0.5s ease;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
}
.slide-down-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-down-leave,
.slide-down-enter-to {
  transform: translateY(0);
}
</style>