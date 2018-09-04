<template>
  <div class="Vlt-callout" :class="getClassArray()">
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
    }
  },

  methods: {
    dismiss() {
      this.dismissed = true;
    },

    getClassArray() {
      const classArray = VALID_TYPES.filter((type) => type === this.type)
        .map((type) => `Vlt-callout--${type}`);

      if(this.dismissible) {
        const conditionalClass = {
          'Vlt-callout--dismissed': this.dismissed,
        }
        classArray.push(conditionalClass);
      }

      return classArray;
    },
  },
};
</script>
