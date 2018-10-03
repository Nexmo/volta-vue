<template>
    <div
      class="Vlt-form__element"
      :class="classObject"
    >
      <label v-if="!big && label" class="Vlt-label">{{label}}
        <small class="Vlt-form__element_optional" v-if="optional">(optional)</small>
        <vlt-tooltip v-if="tooltip" :title="tooltip" />
      </label>
      <slot></slot>
      <small v-if="error" class="Vlt-form__element__error">{{errorMessage}}</small>
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
    big: Boolean,
    elastic: Boolean,
    error: Boolean,
    errorMessage: String,
    label: String,
    optional: Boolean,
    tooltip: String,
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
