<template>
  <div :id="id" class="Vlt-callout" :class="classArray">
    <i></i>
    <div class="Vlt-callout__content">
      <slot></slot>
    </div>
    <button v-if="dismissable" class="Vlt-callout__dismiss" @click="dismiss"></button>
  </div>
</template>

<script>
  const VALID_TYPES = ['critical', 'good', 'tip', 'shoutout', 'warning'];

  export default {
    name: 'vlt-callout',

    props: {
      dismissable: {
        type: Boolean,
        default: false,
      },
      id: {
        type: String,
        required: false,
      },
      type: {
        type: String,
        default: 'tip',
        validator: val => VALID_TYPES.includes(val),
      },
    },

    data() {
      return {
        dismissed: false,
      };
    },

    computed: {
      classArray() {
        const classArray = VALID_TYPES.filter(type => type === this.type).map(type => `Vlt-callout--${type}`);

        return this.dismissable && this.dismissed ? ['Vlt-callout--dismissed', ...classArray] : classArray;
      },
    },

    methods: {
      dismiss() {
        this.dismissed = true;
        this.$emit('dismissed');
      },
    },
  };
</script>
