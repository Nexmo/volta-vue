<template>
  <svg
    @click="handleClick"
    :class="getClassObject()"
  >
    <use :xlink:href="`#V_Vlt-icon-${icon}`" />
  </svg>
</template>

<script>
export default {
  name: 'vlt-icon',

  methods: {
    handleClick() {
      if (this.clickable) {
        this.$emit('click');
      }
    },

    getClassObject() {
      const colorClass = `Vlt-${this.color}`;

      return {
        'Vlt-icon': !this.noClass,
        pointer: this.pointer,
        spin: this.spin,
        'Vlt-icon--small': this.small,
        [colorClass]: this.color,
      };
    },
  },

  props: {
    icon: {
      type: String,
      required: true,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      required: false,
    },
    noClass: {
      type: Boolean,
      default: false,
    },
    pointer: {
      type: Boolean,
      default: false,
    },
    spin: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.Vlt-icon.pointer {
  cursor: pointer;
}
.spin {
  animation: spin 1s infinite linear reverse;
}
</style>
