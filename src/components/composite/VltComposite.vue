<template>
  <div :class="['Vlt-composite', className]">
    <div v-if="hasPrepend" class="Vlt-composite__prepend">
      <slot name="prepend" />
    </div>
    <slot></slot>
    <div v-if="hasAppend" class="Vlt-composite__append">
      <slot name="append" />
    </div>
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

  computed: {
    hasAppend() {
      return this.$slots.append && this.$slots.append.length;
    },

    hasPrepend() {
      return this.$slots.prepend && this.$slots.prepend.length;
    },
  },
};
</script>
