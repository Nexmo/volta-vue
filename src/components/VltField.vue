<template>
    <div
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
    big: Boolean,
    elastic: Boolean,
    errorMessage: String,
    label: String,
    optional: Boolean,
    tooltip: String,
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
