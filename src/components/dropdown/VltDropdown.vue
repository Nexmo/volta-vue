<template>
   <div
    :id="id"
    class="Vlt-dropdown"
    :class="{
      'Vlt-dropdown--expanded' : expanded,
      'Vlt-dropdown__trigger Vlt-dropdown__trigger--btn': trigger
    }"
  >
    <button
      :class="getButtonClass()"
      @click="toggleDropdown($event)"
    >
      <slot name="button-value">
        <span v-if="label && (!hideLabel || !selectedOption)">
          {{label}}<span v-if="showSelection">:</span>
        </span>
        <span v-if="showSelection" :class="{ 'Vlt-dropdown__selection': label }">
          {{ property && selectedOption ? selectedOption[property] : selectedOption }}
        </span>
      </slot>
    </button>
    <div class="Vlt-dropdown__panel">
      <div class="Vlt-dropdown__panel__content">
        <ul>
          <li v-for="option in options" :key="option">
            <a class="Vlt-dropdown__link" @click="selectOption(option)">
              <span class="Vlt-dropdown__label">{{property ? option[property] : option}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable prefer-destructuring */
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
      type: String,
      required: false,
    },
    label: {
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
      type: String,
      required: false,
    },
    selected: {
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
  },

  data() {
    return {
      expanded: false,
      selectedOption: this.selected,
    };
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
  },

  mounted() {
    if (!this.selected) {
      this.selectedOption = this.options[0];
      this.$emit('input', this.selectedOption);
    }
  },

  watch: {
    selected(selected) {
      this.selectedOption = selected;
    },
    options(value) {
      if (value && !this.selectedOption) {
        this.selectedOption = value[0];
        this.$emit('input', this.selectedOption);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .Vlt-dropdown .Vlt-btn.Vlt-btn--unbordered{
    box-shadow: none;
    svg{
      margin-right: 0;
      margin-left: 0;
    }
  }
  .Vlt-dropdown .Vlt-btn.Vlt-btn--no-arrow::after{
    display: none;
  }
</style>
