<template>
  <div class="flex items-center justify-around h-screen">
    <div class="flex flex-col items-center text-center">
      <SquareButton :route="'/dorm/1'" text="男九" />
    </div>
    <div class="flex flex-col items-center text-center">
      <SquareButton :route="'/dorm/2'" text="男十三" />
    </div>
    <div class="flex flex-col items-center text-center">
      <SquareButton :route="'/dorm/3'" text="女二" />
    </div>
    <div class="flex flex-col items-center text-center">
      <SquareButton :route="'/dorm/4'" text="女四" />
    </div>
  </div>
</template>

<script>
import SquareButton from "~/components/SquareButton.vue";
export default {
  components: { SquareButton },
};
</script>