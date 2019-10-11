<template>
  <div
    :id="id"
    :class="classObject"
    class="Vlt-form__element"
  >
    <label v-if="!big && label" class="Vlt-label">{{ label }}
      <small v-if="optional" class="Vlt-form__element_optional">(optional)</small>
      <vlt-tooltip v-if="tooltip" :title="tooltip" />
    </label>
    <slot></slot>
    <small v-if="error" :id="errorId" class="Vlt-form__element__error">{{ error }}</small>
  </div>
</template>

<script>
import VltTooltip from '../tooltip/VltTooltip';

export default {
  name: 'vlt-field',

  components: {
    VltTooltip,
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
      default: '',
    },
    id: {
      type: String,
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    optional: {
      type: Boolean,
      default: false,
    },
    tooltip: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {
      valid: true,
    };
  },

  computed: {
    classObject() {
      return {
        'Vlt-form__element--big': this.big,
        'Vlt-form__element--elastic': this.elastic,
        'Vlt-form__element--error': this.error,
      };
    },
    errorId() {
      if (this.id) return `${this.id}-error`;
      return '';
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
