<template>
  <div class="Vlt-col" :class="getClassObject()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VltCol',

  props: {
    center: Boolean,
    right: Boolean,
    mWidth: String,
    sWidth: String,
    width: String,
  },

  methods: {
    getClassObject() {
      return {
        'Vlt-col--center': this.center,
        'Vlt-col--right': this.right,
        'Vlt-col--1of2': this.width === '1of2',
        'Vlt-col--1of3': this.width === '1of3',
        'Vlt-col--1of4': this.width === '1of4',
        'Vlt-col--2of3': this.width === '2of3',
        'Vlt-col--3of4': this.width === '3of4',
        'Vlt-col--S-1of2': this.sWidth === '1of2',
        'Vlt-col--S-1of3': this.sWidth === '1of3',
        'Vlt-col--S-1of4': this.sWidth === '1of4',
        'Vlt-col--S-2of3': this.sWidth === '2of3',
        'Vlt-col--S-3of4': this.sWidth === '3of4',
        'Vlt-col--M-1of2': this.mWidth === '1of2',
        'Vlt-col--M-1of3': this.mWidth === '1of3',
        'Vlt-col--M-1of4': this.mWidth === '1of4',
        'Vlt-col--M-2of3': this.mWidth === '2of3',
        'Vlt-col--M-3of4': this.mWidth === '3of4',
      };
    },
  },
};
</script>
