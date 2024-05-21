<template>
  <NuxtLayout>
    <transition name="slide">
      <NuxtPage />
    </transition>
  </NuxtLayout>
</template>

<script>
export default {};
</script>

<style>
/* the slide down transition failed */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
</style>

