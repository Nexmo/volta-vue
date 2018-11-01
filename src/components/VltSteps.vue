<template>
  <div class="Vlt-steps">
    <div
      v-for="(step, index) in items"
      :id="id"
      :key="index"
      @click="select(index)"
      class="Vlt-steps__item"
      :class="getClassObject(step, index)">
      {{step.title}}
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
    complete: {
      type: Array,
      required: false,
    },
    disabled: {
      type: Array,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    steps: {
      type: Array,
      required: false,
    },
    selected: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      selectedIndex: 0,
      items: [],
    };
  },

  methods: {
    getClassObject(step, index) {
      return {
        'Vlt-steps__item_selected': this.selectedIndex === index,
        'Vlt-steps__item_disabled': this.disabled && this.disabled.indexOf(index) >= 0,
        'Vlt-steps__item_done': this.complete && this.complete.indexOf(index) >= 0,
      };
    },

    select(index) {
      if (!this.disabled || this.disabled.indexOf(index) === -1) {
        this.selectedIndex = index;
        this.$emit('update', this.selectedIndex);
      }
    },
  },

  mounted() {
    if (this.count) {
      for (let i = 0; i < parseInt(this.count, 10); i += 1) {
        this.items.push(i);
      }
    } else {
      for (let i = 0; i < this.steps.length; i += 1) {
        const item = {
          title: this.steps[i],
        };

        this.items.push(item);
      }
    }
  },

  watch: {
    selected(value) {
      this.selectedIndex = value;
    },
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
