<template>
  <div class="Vlt-callout" :class="classArray">
    <i></i>
    <div class="Vlt-callout__content">
      <slot></slot>
    </div>
    <button v-if="dismissible" class="Vlt-callout__dismiss" @click="dismiss"></button>
  </div>
</template>

<script>
const VALID_TYPES = ['critical', 'good', 'tip', 'shoutout', 'warning'];

export default {
  name: 'VltCallout',

  props: {
    dismissible: Boolean,
    type: {
      type: String,
      required: true,
      validator: (val) => VALID_TYPES.includes(val),
    },
  },

  data() {
    return {
      dismissed: false,
    };
  },

  computed: {
    classArray() {
      const classArray = VALID_TYPES.filter((type) => type === this.type)
        .map((type) => `Vlt-callout--${type}`);

      return this.dismissible && this.dismissed ?
        ['Vlt-callout--dismissed', ...classArray]
        : classArray;
    },
  },

  methods: {
    dismiss() {
      this.dismissed = true;
    },
  },
};
</script>
