<template>
  <div :class="['Vlt-form__element', big ? 'Vlt-form__element--big' : '']">
    <div class="Vlt-composite">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vlt-composite',
  props: {
    big: {
      type: Boolean,
      default: () => false,
    },
  },
};

</script>

<style lang="scss">

</style>

