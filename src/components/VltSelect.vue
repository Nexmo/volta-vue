<template>
  <div :class="[className , 'Vlt-select', isInComposite ? 'Vlt-select--composite' : '']">
    <select :id="id" :value="val" v-on="inputListeners" :disabled="disabled">
      <option v-if="!!selected" selected value="">{{ selected }}</option>
      <option
        v-for="option in options"
        :value="option.label ? option.value : option"
        :disabled="option.disabled"
        :key="option.label ? `${option.value}-${option.label}` : option">
        {{ option.label || option }}
      </option>
    </select>
    <label v-if="!!label" :for="id">
      {{ label }}
    </label>
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
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    selected: {
      type: String,
      required: false,
    },
    val: {
      type: String,
      required: false,
    },
    isInComposite: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inputListeners() {
      const vm = this;

      return {
        ...this.$listeners,
        input({ target: { value } }) {
          vm.$emit('input', value);
        },
      };
    },
  },
};
</script>

<style lang="css" scoped>
  .Vlt-select select {
    -webkit-appearance: none;
  }
  .Vlt-select.Vlt-select--composite select{
    border: 0;
  }
</style>
