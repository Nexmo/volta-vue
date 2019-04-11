<template>
   <div :id="id" class="Vlt-dropdown" :class="{ 'Vlt-dropdown--expanded' : expanded }">
    <button
      :class="getButtonClass()"
      @click="toggleDropdown($event)"
    >
      <span v-if="label && (!hideLabel || !selectedOption)">
        {{label}}<span v-if="showSelection">:</span>
      </span>
      <span v-if="showSelection" :class="{ 'Vlt-dropdown__selection': label }">
        {{ property && selectedOption ? selectedOption[property] : selectedOption }}
      </span>
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
        'Vlt-dropdown__btn': true,
        'Vlt-dropdown__btn--app': this.app,
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