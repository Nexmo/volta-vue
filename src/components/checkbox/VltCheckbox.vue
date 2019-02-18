<template>
  <div :id="id" class="Vlt-checkbox" :class="{ 'Vlt-checkbox--inline': inline }">
    <label>
      <span class="Vlt-checkbox__button">
        <input
          type="checkbox"
          :checked="checked"
          :disabled="disabled"
          :id="id"
          v-on="inputListeners"
        />
        <span class="Vlt-checkbox__icon"></span>
      </span>
      {{label}}
      <vlt-tooltip v-if="tooltipTitle" :position="tooltipPosition" :title="tooltipTitle" />
    </label>
  </div>
</template>

<script>
import VltTooltip from '../tooltip/VltTooltip';

export default {
  name: 'vlt-checkbox',

  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    tooltipPosition: {
      type: String,
      required: false,
    },
    tooltipTitle: {
      type: String,
      required: false,
    },
  },

  components: {
    VltTooltip,
  },

  computed: {
    inputListeners() {
      const vm = this;

      return Object.assign({}, this.$listeners, {
        input(event) {
          vm.$emit('input', event.target.checked);
        },
      });
    },
  },
};
</script>
