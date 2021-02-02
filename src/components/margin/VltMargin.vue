<template>
  <div :class="classArray">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vlt-margin',

    props: {
      bottom: {
        type: String,
        required: false,
      },
      aBottom: {
        type: String,
        required: false,
      },
      mBottom: {
        type: String,
        required: false,
      },
      sBottom: {
        type: String,
        required: false,
      },
      top: {
        type: String,
        required: false,
      },
      aTop: {
        type: String,
        required: false,
      },
      mTop: {
        type: String,
        required: false,
      },
      sTop: {
        type: String,
        required: false,
      },
    },

    computed: {
      classArray() {
        const classes = [];
        /* eslint-disable guard-for-in */
        /* eslint-disable no-restricted-syntax */
        for (const prop in this.$props) {
          const value = this.$props[prop];
          if (value && (prop === 'bottom' || prop === 'top')) {
            classes.push(`Vlt-margin--${prop}${value}`);
          } else if (value) {
            const responsive = prop.split('')[0].toUpperCase();
            const position = prop.slice(1, prop.length).toLowerCase();
            classes.push(`Vlt-margin--${responsive}-${position}${value}`);
          }
        }

        return classes;
      },
    },
  };
</script>
