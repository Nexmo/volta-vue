<template>
    <div
      :id="id"
      class="Vlt-form__element"
      :class="[{'Vlt-form__element--big' : big}, {'Vlt-form__element--elastic': elastic}]"
    >
      <label v-if="!big && label" class="Vlt-label">{{label}}
        <small class="Vlt-form__element_optional" v-if="optional">(optional)</small>
        <vlt-tooltip v-if="tooltip" :title="tooltip" />
      </label>
      <slot></slot>
      <small v-if="!valid" class="Vlt-form__element__error">{{errorMessage}}</small>
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
    errorMessage: {
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

  watch: {
    errorMessage(value) {
      this.valid = !value;
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
