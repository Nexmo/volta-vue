<template>
  <div :class="['Vlt-btn-group Vlt-btn-group--app', big ? 'Vlt-btn-group--big' : '', className]">
    <button v-for="option in options"
            :class="['Vlt-btn Vlt-btn--tertiary', isMatching(val, option) ? activeClassName : '']"
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

const singleSelect = (val, option) => isMatching(val, option) ? '' : option;

const multiSelect = (val, option) => isMatching(val, option) ? val.filter(v => !isMatching(v, option)) : [...val, option];

export default {
  name: 'vlt-group-button',
  props: {
    big: {
      type: Boolean,
      default: () => false,
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    val: {
      type: [Array, Object, String],
      required: true,
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
      this.$emit('input', Array.isArray(this.val) ? multiSelect(this.val, clickedOption) : singleSelect(this.val, clickedOption));
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
