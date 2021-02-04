<template>
  <svg :class="classnames" @click="handleClick">
    <use :xlink:href="`#V_Vlt-icon-${icon}`" />
  </svg>
</template>

<script>
  export default {
    name: 'vlt-icon',

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
        default: '',
      },
      noClass: {
        type: Boolean,
        default: false,
      },
      pointer: {
        type: Boolean,
        default: false,
      },
      small: {
        type: Boolean,
        default: false,
      },
      smaller: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      classnames() {
        const colorClass = `Vlt-${this.color}`;

        return {
          'Vlt-icon': !this.noClass,
          pointer: this.pointer,
          'Vlt-icon--small': this.small && !this.smaller,
          'Vlt-icon--smaller': this.smaller,
          [colorClass]: this.color,
        };
      },
    },

    methods: {
      handleClick() {
        if (this.clickable) {
          this.$emit('click');
        }
      },
    },
  };
</script>

<style scoped>
  .Vlt-icon.pointer {
    cursor: pointer;
  }
</style>
