<template>
  <div class="Vlt-callout Vlt-flash" :class="classArray" :style="styleObject">
    <i></i>
    <div class="Vlt-callout__content">
      <p><slot></slot></p>
    </div>
    <button v-if="dismissible" class="Vlt-callout__dismiss" @click="dismiss"></button>
  </div>
</template>

<script>
import Vue from 'vue';

Vue.prototype.$FlashBus = new Vue();

const VALID_TYPES = ['critical', 'good', 'shoutout', 'warning'];

let countTop = 0;
let countBottom = 0;

export default {
  name: 'vlt-flash',

  props: {
    bottom: {
      type: Boolean,
      default: false
    },
    dismissible: Boolean,
    type: {
      type: String,
      default: 'shoutout',
      validator: (val) => VALID_TYPES.includes(val),
    },
    small: Boolean,
    timeout: {
      type: Number | String,
      default: 5000,
      required: false,
    },
    visible: Boolean,
  },

  data() {
    return {
      dismissTimeoutFn: undefined,
      index: 0,
      flashVisible: this.visible,
      styleObject: {},
    }
  },

  watch: {
    flashVisible: function(value) {
      if(value && this.bottom) {
        countBottom++;
        this.index = countBottom;
        this.styleObject.bottom = `${this.index * 70 - 50}px`;
      } else if(value) {
        countTop++;
        this.index = countTop;
        this.styleObject.top = `${this.index * 70 - 50}px`;
      }
    },

    visible: function(value) {
      this.flashVisible = value;

      const self = this;

      if(!this.dismissible) {
        setTimeout(function() {
          self.dismiss();
        }, this.timeout);
      }
    },
  },

  methods: {
    dismiss: function() {
      if(this.bottom) {
        if(countBottom > 0) countBottom--;
        this.styleObject.bottom = '-100%'
      } else {
        if(countTop > 0) countTop--;
        this.styleObject.top = '-100%'
      }

      this.flashVisible = false
      this.$emit('dismissed');
      if(this.bottom) {
        this.$FlashBus.$emit('bottom-dismissed', this.index)
      } else {
        this.$FlashBus.$emit('top-dismissed', this.index)
      }
    }
  },

  mounted() {
    const self = this;

    if(this.bottom) {
      this.$FlashBus.$on('bottom-dismissed', function(index) {
        if(self.flashVisible) {
          if(index < self.index) {
            self.index--;
            self.styleObject.bottom = `${self.index * 70 - 50}px`;
          }
        }
      })
    } else {
      this.$FlashBus.$on('top-dismissed', function(index) {
        if(self.flashVisible) {
          if(index < self.index) {
            self.index--;
            self.styleObject.top = `${self.index * 70 - 50}px`;
          }
        }
      })
    }
  },

  computed: {
    classArray() {
      let classArray = VALID_TYPES
        .filter((type) => type === this.type)
        .map((type) => `Vlt-callout--${this.type}`);

      let conditionalClasses = {
        'Vlt-flash_visible': this.flashVisible,
        'Vlt-flash--small': this.small,
        'Vlt-flash--bottom': this.bottom
      }

      classArray.push(conditionalClasses);

      return classArray;
    },
  },
};
</script>
