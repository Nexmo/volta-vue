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
    complete(index) {
      this.steps[index].done = true;
      this.selectedIndex = index + 1;
    },

    getClassObject(step, index) {
      return {
        'Vlt-steps__item_selected': this.selectedIndex === index,
        'Vlt-steps__item_done': step.done,
      };
    },

    select(index) {
      this.selectedIndex = index;
    },

    uncomplete(index) {
      this.steps[index].done = false;
    },
  },

  mounted() {
    if (this.count) {
      for (let i = 0; i < parseInt(this.count, 10); i += 1) {
        const item = {
          done: false,
        };

        this.items.push(item);
      }
    } else {
      for (let i = 0; i < this.steps.length; i += 1) {
        const item = {
          done: false,
          title: this.steps[0],
        };

        this.items.push(item);
      }
    }
  },
};
</script>
