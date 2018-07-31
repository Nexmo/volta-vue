<template>
  <div class="Vlt-spinner" :class="{ 'Vlt-spinner--small': small }"></div>
</template>

<script>
export default {
  name: 'vlt-spinner',

  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

</style>
