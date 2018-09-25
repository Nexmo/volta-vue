<template>
   <div class="Vlt-dropdown" :class="{ 'Vlt-dropdown--expanded' : expanded }">
    <button
      :class="getButtonClass()"
      :style="getButtonStyle()"
      @click="toggleDropdown($event)"
    >
      <span v-if="label && (!hideLabel || !selectedOption)">
        {{label}}<span v-if="showSelection">:</span>
      </span>
      <span v-if="showSelection">
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
export default {
  name: 'vlt-dropdown',

  props: {
    app: {
      type: Boolean,
      required: false,
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
    label: String,
    minWidth: String,
    options: Array,
    property: String,
    selected: {
      type: [Object, String],
      required: false,
    },
    showSelection: Boolean,
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
        'min-width-button': this.minWidth,
        'Vlt-dropdown__btn--app': this.app,
      };
    },

    getButtonStyle() {
      return this.minWidth ? { 'min-width': this.minWidth } : {};
    },

    toggleDropdown(event) {
      event.stopPropagation();
      this.expanded = !this.expanded;

      if (this.expanded) {
        document.addEventListener('click', this.bodyListener);
      }
    },

    selectOption(option) {
      const selection = option;

      this.selectedOption = selection;
      this.$emit('input', selection);
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
    options(options) {
      if (!this.selected) {
        this.selectedOption = options[0];
        this.$emit('input', this.selectedOption);
      }
    },
  },
};
</script>

<style scoped>
.min-width-button {
  display: flex;
  justify-content: space-between;
}
</style>
