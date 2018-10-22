<template>
  <div :class="`Vlt-form__element Vlt-form__element--${size || 'big'}`">
    <div class="Vlt-select">
      <select :id="id" v-on="inputListeners">
        <option v-if="!!firstOptionText" selected value="">{{ firstOptionText }}</option>
        <option v-for="option in options" :value="option.value || option" :key="option.value || option">
          {{ option.label || option }}
        </option>
      </select>
      <label v-if="!!labelText" :for="id">
        {{ labelText }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vlt-select',
  props: {
    id: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: true
    },
    labelText: {
      type: String,
      required: false
    },
    firstOptionText: {
      type: String,
      required: false
    },
    size: {
      type: String,
      validator: value => ['big', 'small'].includes(value)
    },
  },
  computed: {
    inputListeners() {
      const vm = this;

      return {
        ...this.$listeners,
        input({ target: { value } }) {
          vm.$emit("input", value);
        }
      };
    }
  }
};
</script>
