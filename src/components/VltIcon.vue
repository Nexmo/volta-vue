<template>
  <svg @click="handleClick" class="Vlt-icon" :class="{'pointer': pointer, 'spin': spin, 'Vlt-icon--small': small}">
    <use :xlink:href="'#V_Vlt-icon-' + icon" />
  </svg>
</template>

<script>
  // Need to import icon here
  // import './folder/icon.svg';
  export default {
    name: 'vlt-icon',
    methods: {
      handleClick() {
        if (this.clickable) {
          this.$emit('click');
        }
      }
    },
    props: {
      icon: {
        type: String,
        default: ''
      },
      clickable: {
        type: Boolean,
        default: true
      },
      pointer: {
        type: Boolean,
        default: false
      },
      spin: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      }
    }
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