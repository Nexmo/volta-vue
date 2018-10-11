<template>
    <div
      :id="id"
      class="Vlt-form__element"
      :class="classObject"
    >
      <label v-if="!big && label" class="Vlt-label">{{label}}
        <small class="Vlt-form__element_optional" v-if="optional">(optional)</small>
        <vlt-tooltip v-if="tooltip" :title="tooltip" />
      </label>
      <slot></slot>
      <small v-if="error" class="Vlt-form__element__error">{{error}}</small>
  </div>
</template>

<script>
import VltTooltip from './VltTooltip';

export default {
  name: 'vlt-field',

  components: {
    VltTooltip,
  },

  data() {
    return {
      valid: true,
    };
  },

  props: {
    big: {
      type: Boolean,
      default: false,
    },
    elastic: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    optional: {
      type: Boolean,
      default: false,
    },
    tooltip: {
      type: String,
      required: false,
    },
  },

  computed: {
    classObject() {
      return {
        'Vlt-form__element--big': this.big,
        'Vlt-form__element--elastic': this.elastic,
        'Vlt-form__element--error': this.error,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@vonagevolta/core/scss/lib/_variables.scss';

.Vlt-form__element_optional {
  color: $grey-darker;
}
</style>
