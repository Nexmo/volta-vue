<template>
  <div class="Vlt-grid" :class="getClassObject()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VltGrid',

  props: {
    bottom: Boolean,
    center: Boolean,
    flush: Boolean,
    middle: Boolean,
    narrow: Boolean,
    margin: String,
    marginBottom: String,
    marginTop: String,
  },

  methods: {
    getClassObject() {
      return {
        'Vlt-grid--bottom': this.bottom,
        'Vlt-grid--center': this.center,
        'Vlt-grid--flush': this.flush,
        'Vlt-grid--middle': this.middle,
        'Vlt-grid--narrow': this.narrow,
        'Vlt-grid--margin1': this.margin === '1',
        'Vlt-grid--margin2': this.margin === '2',
        'Vlt-grid--margin3': this.margin === '3',
        'Vlt-grid--margin4': this.margin === '4',
        'Vlt-grid--margin-bottom1': this.marginBottom === '1',
        'Vlt-grid--margin-bottom2': this.marginBottom === '2',
        'Vlt-grid--margin-bottom3': this.marginBottom === '3',
        'Vlt-grid--margin-bottom4': this.marginBottom === '4',
        'Vlt-grid--margin-top1': this.marginTop === '1',
        'Vlt-grid--margin-top2': this.marginTop === '2',
        'Vlt-grid--margin-top3': this.marginTop === '3',
        'Vlt-grid--margin-top4': this.marginTop === '4',
      };
    },
  },
};
</script>
