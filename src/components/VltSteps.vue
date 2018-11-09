<template>
  <div class="Vlt-steps">
    <div
      v-if="items.length"
      v-for="(step, index) in items"
      :id="id"
      :key="index"
      @click="select(step, index)"
      class="Vlt-steps__item"
      :class="getClassObject(step, index)">
      {{ step.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vlt-steps',

  props: {
    count: {
      type: Number,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    selected: {
      type: Number,
      default: 0,
    },
    steps: {
      type: Array,
      required: false,
    }
  },

  data() {
    return {
      selectedIndex: this.selected,
      items: [],
    };
  },

  methods: {
    applyTemplate() {
      const template = {
        complete: false,
        disabled: false,
        done: false,
      };

      if (this.count) {
        this.items = Array(parseInt(this.count, 10)).fill(template);
      } else {
        this.items = this.steps.map((step) => ({
          ...template,
          ...step,
        }));
      }
    },

    getClassObject(step, index) {
      return {
        'Vlt-steps__item_selected': this.selectedIndex === index,
        'Vlt-steps__item_disabled': step.disabled,
        'Vlt-steps__item_done': step.complete,
      };
    },

    select(step, index) {
      if (!step.disabled) {
        this.selectedIndex = index;
        this.$emit('update', this.selectedIndex);
      }
    },
  },

  mounted() {
    this.applyTemplate();
  },

  watch: {
    count() {
      this.applyTemplate();
    },

    selected(value) {
      this.selectedIndex = value;
    },

    steps() {
      this.applyTemplate();
    }
  },
};
</script>
<!-- eslint-disable max-len -->
<style lang="scss" scoped>
  .Vlt-steps__item:not(.Vlt-steps__item_selected):not(.Vlt-steps__item_done):not(.Vlt-steps__item_disabled) {
    &:before {
      cursor: pointer;
    }
  }
</style>
