<template>
  <div :class="['Vlt-btn-group Vlt-btn-group--app', big ? 'Vlt-btn-group--big' : '', className]">
    <button
      v-for="option in options"
      :class="['Vlt-btn Vlt-btn--tertiary', isMatching(modelValue, option) ? activeClassName : '']"
      :value="option.value || option"
      :key="option.value || option"
      @click="handleClick(option)"
    >
      {{ option.label || option }}
    </button>
  </div>
</template>

<script>
  const isMatching = (val = '', option = 'default') => {
    if (typeof val === 'string' || typeof val === 'number') return val === option;
    if (Array.isArray(val) && typeof option === 'string') return val.includes(option);
    if (Array.isArray(val) && typeof option === 'object') return val.some(v => v.value === option.value);
    return val.value === option.value;
  };

  const singleSelect = (val, option) => (isMatching(val, option) ? '' : option);

  const multiSelect = (val, opt) => (isMatching(val, opt) ? val.filter(v => !isMatching(v, opt)) : [...val, opt]);

  export default {
    name: 'vlt-group-button',
    compatConfig: {
      COMPONENT_V_MODEL: false,
    },
    props: {
      big: {
        type: Boolean,
        default: () => false,
      },
      options: {
        type: Array,
        default: () => [],
      },
      modelValue: {
        type: [Array, Object, String],
        default: () => [],
      },
      activeClassName: {
        type: String,
        default: () => 'Vlt-btn_active',
      },
      className: {
        type: String,
        default: () => '',
      },
    },
    methods: {
      handleClick(clickedOption) {
        this.$emit(
          'update:modelValue',
          Array.isArray(this.modelValue)
            ? multiSelect(this.modelValue, clickedOption)
            : singleSelect(this.modelValue, clickedOption)
        );
      },
      isMatching,
    },
  };
</script>
<style lang="scss" scoped>
  .Vlt-btn {
    margin-top: 24px;
  }
</style>
