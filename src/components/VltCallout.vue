<template>
  <div class="Vlt-callout" :class="getClassObject()">
    <i></i>
    <div class="Vlt-callout__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VltCallout',

  props: {
    critical: Boolean,
    good: Boolean,
    tip: Boolean,
    shoutout: Boolean,
    warning: Boolean,
  },

  methods: {
    getClassObject() {
      return {
        'Vlt-callout--critical': this.critical,
        'Vlt-callout--good': this.good,
        'Vlt-callout--tip': this.tip,
        'Vlt-callout--shoutout': this.shoutout,
        'Vlt-callout--warning': this.warning,
      };
    },
  },
};
</script>
