<template>
  <div :id="id" class="Vlt-callout Vlt-flash" :class="classObject" :style="styleObject">
    <i></i>
    <div class="Vlt-callout__content">
      <p><slot></slot></p>
    </div>
    <button v-if="dismissable" class="Vlt-callout__dismiss" @click="dismiss"></button>
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
        default: false,
      },
      dismissable: {
        type: Boolean,
        default: false,
      },
      id: {
        type: String,
        required: false,
      },
      type: {
        type: String,
        default: 'shoutout',
        validator: val => VALID_TYPES.includes(val),
      },
      small: {
        type: Boolean,
        default: false,
      },
      timeout: {
        type: Number,
        default: 5000,
        required: false,
      },
      visible: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        dismissTimeoutFn: undefined,
        index: 0,
        flashVisible: this.visible,
        styleObject: {},
      };
    },

    watch: {
      flashVisible(value) {
        if (!value) {
          return;
        }
        if (this.bottom) {
          countBottom += 1;
          this.index = countBottom;
          this.styleObject.bottom = `${this.index * 70 - 50}px`;
        } else {
          countTop += 1;
          this.index = countTop;
          this.styleObject.top = `${this.index * 70 - 50}px`;
        }
      },

      visible(value) {
        if (!value) {
          return;
        }
        this.flashVisible = value;
        if (!this.dismissable) {
          setTimeout(this.dismiss, this.timeout);
        }
      },
    },

    methods: {
      dismiss() {
        if (this.bottom) {
          if (countBottom > 0) countBottom -= 1;
          this.styleObject.bottom = '-100%';
        } else {
          if (countTop > 0) countTop -= 1;
          this.styleObject.top = '-100%';
        }

        this.flashVisible = false;
        this.$emit('dismissed');
        if (this.bottom) {
          this.$FlashBus.$emit('bottom-dismissed', this.index);
        } else {
          this.$FlashBus.$emit('top-dismissed', this.index);
        }
      },
    },

    mounted() {
      const self = this;

      if (this.bottom) {
        this.$FlashBus.$on('bottom-dismissed', index => {
          if (self.flashVisible) {
            if (index < self.index) {
              self.index -= 1;
              self.styleObject.bottom = `${self.index * 70 - 50}px`;
            }
          }
        });
      } else {
        this.$FlashBus.$on('top-dismissed', index => {
          if (self.flashVisible) {
            if (index < self.index) {
              self.index -= 1;
              self.styleObject.top = `${self.index * 70 - 50}px`;
            }
          }
        });
      }
    },

    computed: {
      classObject() {
        const calloutType = VALID_TYPES.find(type => type === this.type);

        return {
          [`Vlt-callout--${calloutType}`]: true,
          'Vlt-flash_visible': this.flashVisible,
          'Vlt-flash--small': this.small,
          'Vlt-flash--bottom': this.bottom,
        };
      },
    },
  };
</script>
