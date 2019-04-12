<template>
  <div class="Vlt-accordion" :class="classObject">
    <div :id="id" class="Vlt-accordion__content" v-if="styled">
      <button class="Vlt-accordion__trigger" @click="toggleAccordion()">
          {{label}}
      </button>
      <transition name="Vlt-accordion__panel"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
      <div class="Vlt-accordion__content_wrap" v-if="styled && showAccordion">
          <slot></slot>
      </div>
      </transition>
    </div>
    <slot v-if="trigger || panel"></slot>
  </div>
</template>

<style lang="scss">
    .Vlt-accordion__content {
      height: auto !important;
    }
    .Vlt-accordion__panel-enter, .Vlt-accordion__panel-leave-to {
      height: 0;
    }
    .Vlt-accordion__panel-enter-active, .Vlt-accordion__panel-leave-active {
      overflow: hidden;
      transition: all .5s ease;
    }
</style>

<script>

export default {
  name: 'vlt-accordion',

  props: {
    app: {
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
    panel: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classObject() {
      const obj = {
        'Vlt-js-accordion__trigger': this.trigger,
        'Vlt-js-accordion__content': this.panel,
        ['Vlt-accordion-' + this.label]: !this.styled,
      };
      return obj;
    },
  },

  data() {
    return {
      showAccordion: false,
      styled: !this.trigger && !this.panel,
    }
  },

  methods: {
    enter(element) {
      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      getComputedStyle(element).height;//force repaint

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    leave(element) {
      const height = getComputedStyle(element).height;
      
      element.style.height = height;

      getComputedStyle(element).height;//force repaint

      setTimeout(() => {
        element.style.height = 0;
      });
    },
    toggleAccordion() {
      if (this.styled) {
        this.showAccordion = !this.showAccordion;
      }
    },
  },
};
</script>