<template>
  <span :id="id" v-if="!dismissed" class="Vlt-badge" :class="classObject">
    <slot></slot>
    <button v-if="dismissable" @click="dismiss($event)" class="Vlt-badge__dismiss"></button>
  </span>
</template>

<script>
export default {
  name: 'vlt-badge',

  props: {
    color: {
      type: String,
      default: 'blue',
    },
    dismissable: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    stacked: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      dismissed: false,
    };
  },

  computed: {
    classObject() {
      let badgeColor;
      const obj = {
        'Vlt-badge--dismissable': this.dismissable,
        'Vlt-badge--large': this.large,
        'Vlt-badge--small': this.small,
        'Vlt-badge--stacked': this.stacked,
      };

      if (this.color) {
        badgeColor = `Vlt-badge--${this.color}`;
        obj[badgeColor] = true;
      }
      return obj;
    },
  },

  methods: {
    dismiss(event) {
      event.stopPropagation();
      event.preventDefault();

      this.dismissed = true;
      this.$emit('dismissed');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@vonagevolta/core/scss/lib/_variables.scss';

.Vlt-badge--stacked {
  margin-bottom: $unit1;
}
</style>
