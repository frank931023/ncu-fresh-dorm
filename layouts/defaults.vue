<template>
  <div>
    <transition name="slide-down" mode="out-in">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
}
.slide-down-enter-to,
.slide-down-leave {
  transform: translateY(0);
}
</style>