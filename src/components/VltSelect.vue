<template>
  <div class="Vlt-select">
    <select :id="id" v-on="inputListeners">
      <option v-if="!!selected" selected value="">{{ selected }}</option>
      <option
        v-for="option in options"
        :value="option.value || option"
        :key="option.value || option">
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
</style>
