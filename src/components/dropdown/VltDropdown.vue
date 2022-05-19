<template>
  <div
    :id="id"
    :class="{
      'Vlt-dropdown--expanded': expanded,
      'Vlt-dropdown__trigger Vlt-dropdown__trigger--btn': trigger,
    }"
    class="Vlt-dropdown"
  >
    <button :class="getButtonClass()" :disabled="disabled" @click="toggleDropdown($event)">
      <slot name="button-value">
        <span v-if="label && (!hideLabel || !selectedOption)"> {{ label }}<span v-if="showSelection">:</span> </span>
        <span v-if="showSelection" :class="{ 'Vlt-dropdown__selection': label }">
          {{ (selectedOption && selectedOption[labelKey]) || selectedOption }}
        </span>
      </slot>
    </button>
    <div class="Vlt-dropdown__panel">
      <div class="Vlt-dropdown__panel__content">
        <ul>
          <li v-for="option in options" :id="createId(option)" :key="option[valueKey] || option">
            <a class="Vlt-dropdown__link" @click="selectOption(option)">
              <span class="Vlt-dropdown__label">{{ option[labelKey] || option }}</span>
            </a>
          </li>
          <li v-if="newOptionIsUsed" class="Vlt-dropdown__block">
            <slot name="newOption"></slot>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vlt-dropdown',

    props: {
      app: {
        type: Boolean,
        default: false,
      },
      hideLabel: {
        type: Boolean,
        default: false,
      },
      id: {
        // eslint-disable-line
        type: String,
        required: false,
      },
      label: {
        // eslint-disable-line
        type: String,
        required: false,
      },
      noArrow: {
        type: Boolean,
        default: false,
      },
      options: {
        type: Array,
        default: () => [],
      },
      property: {
        // eslint-disable-line
        type: String,
        required: false,
      },
      selected: {
        // eslint-disable-line
        type: [Object, String],
        required: false,
      },
      showSelection: {
        type: Boolean,
        default: false,
      },
      trigger: {
        type: Boolean,
        default: false,
      },
      unbordered: {
        type: Boolean,
        default: false,
      },
      labelKey: {
        type: String,
        default: '',
      },
      valueKey: {
        type: String,
        default: '',
      },
      manualSelect: {
        // to control the first automatic selection
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        expanded: false,
        selectedOption: this.selected,
      };
    },

    computed: {
      newOptionIsUsed() {
        return !!this.$slots.newOption;
      },
    },

    watch: {
      selected(selected) {
        this.selectedOption = selected;
      },
      options(value) {
        if (value && !this.selectedOption && !this.manualSelect) {
          [this.selectedOption] = value;
          this.$emit('input', this.selectedOption);
        }
      },
    },

    mounted() {
      if (!this.selected && !this.manualSelect) {
        [this.selectedOption] = this.options;
        this.$emit('input', this.selectedOption);
      }
    },

    methods: {
      bodyListener() {
        this.expanded = false;
        document.removeEventListener('click', this.bodyListener);
      },

      getButtonClass() {
        return {
          'Vlt-dropdown__btn': !this.trigger,
          'Vlt-dropdown__btn--app': this.app,
          'Vlt-btn Vlt-btn--tertiary Vlt-btn--': this.trigger,
          'Vlt-btn--unbordered': this.unbordered,
          'Vlt-btn--no-arrow': this.noArrow,
        };
      },

      toggleDropdown(event) {
        event.stopPropagation();
        if (this.disabled) return;
        this.expanded = !this.expanded;

        if (this.expanded) {
          document.addEventListener('click', this.bodyListener);
        }
      },

      selectOption(option) {
        this.selectedOption = option;
        this.$emit('input', option);
        this.expanded = false;
        document.removeEventListener('click', this.bodyListener);
      },

      createId(option) {
        return `${this.id}-${(option.label || option[this.labelKey] || option).replace(/\s/g, '')}DropdownLink`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .Vlt-dropdown .Vlt-btn.Vlt-btn--unbordered {
    box-shadow: none;
    svg {
      margin-right: 0;
      margin-left: 0;
    }
  }
  .Vlt-dropdown .Vlt-btn.Vlt-btn--no-arrow::after {
    display: none;
  }
  .Vlt-dropdown__block span {
    cursor: pointer;
  }
</style>
