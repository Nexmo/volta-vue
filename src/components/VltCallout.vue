<template>
  <div class="Vlt-callout" :class="getClassArray()">
    <i></i>
    <div class="Vlt-callout__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const VALID_TYPES = ['critical', 'good', 'tip', 'shoutout', 'warning'];

export default {
  name: 'VltCallout',

  props: {
    type: {
      type: String,
      required: true,
      validator: (val) => VALID_TYPES.includes(val),
    },
  },

  methods: {
    getClassArray() {
      return VALID_TYPES.filter((type) => type === this.type)
        .map((type) => `Vlt-callout--${type}`);
    },
  },
};
</script>
