<template>
  <div
    class="Vlt-spinner"
    :class="{
      'Vlt-spinner--small': small,
      'Vlt-spinner--smaller': smaller,
      'Vlt-spinner--white': white,
    }"
  ></div>
</template>

<script>
export default {
  name: 'vlt-spinner',

  props: {
    small: {
      type: Boolean,
      default: false,
    },
    smaller: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

</style>
