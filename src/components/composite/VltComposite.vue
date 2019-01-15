<template>
  <div :class="['Vlt-composite', className]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vlt-composite',
  props: {
    className: {
      type: String,
      default: () => '',
    },
  },
};

</script>

<style lang="scss">

</style>

