<template>
  <!--
    Note: maybe there will be cases is which we want the state of the modal to be
    remembered on close, if that happens we can move v-if and put it instead on parent elements
  -->
  <div
    class="Vlt-modal"
    v-if="visible"
    :id="id"
    :class="{
      'Vlt-modal_visible': visible,
      'Vlt-modal--large': large,
      'Vlt-modal--message': !!message
    }"
  >
    <div class="Vlt-modal__panel" @keyup.enter="confirm" @keyup.esc="close">
      <header class="Vlt-modal__header">
        <h4>{{ title }}</h4>
        <a class="Vlt-modal__dismiss" aria-label="Close" @click="close"></a>
      </header>
      <section class="Vlt-modal__content">
        <slot><p>{{message}}</p></slot>
      </section>
      <footer v-if="!noFooter" class="Vlt-modal__footer">
          <button
            v-if="extraBtnLabel"
            class="Vlt-btn Vlt-btn--app"
            :class="extraBtnClass"
            @click="extraBtnClick"
          >
            <vlt-icon v-if="extraBtnIcon" :icon="extraBtnIcon"></vlt-icon>
            <span>{{extraBtnLabel}}</span>
          </button>
          <button
            v-if="canCancel"
            class="Vlt-btn Vlt-btn--app Vlt-btn--tertiary"
            @click="close"
          >
            {{getCancelText()}}
          </button>
          <button class="Vlt-btn Vlt-btn--app" :class="getPrimaryBtnClass()" @click="confirm"
                  ref="confirmButton">
            <vlt-icon v-if="confirmBtnIcon" :icon="confirmBtnIcon"></vlt-icon>
            {{getOkText()}}
          </button>
      </footer>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VltIcon from '../icon/VltIcon';

export default {
  name: 'vlt-modal',

  components: {
    VltIcon,
  },

  props: {
    canCancel: {
      default: true,
      type: Boolean,
    },
    cancelText: {
      type: String,
      required: false,
    },
    confirmBtnIcon: {
      type: String,
      required: false,
    },
    destructive: {
      default: false,
      type: Boolean,
    },
    dynamic: {
      default: false,
      type: Boolean,
    },
    extraBtnClass: {
      type: String,
      required: false,
    },
    extraBtnIcon: {
      type: String,
      required: false,
    },
    extraBtnLabel: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    large: Boolean,
    message: {
      type: String,
      required: false,
    },
    noFooter: {
      type: Boolean,
      default: false,
    },
    notify: {
      default: false,
      type: Boolean,
    },
    okText: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    if (this.visible) this.setFocusToCofirmButton();
  },

  methods: {
    close() {
      this.$emit('close');
    },

    confirm() {
      this.$emit('confirm');
    },

    extraBtnClick() {
      this.$emit('extraBtnClick');
    },

    getCancelText() {
      if (this.canCancel && this.cancelText) {
        return this.cancelText;
      } if (this.canCancel) {
        return 'Cancel';
      }
      return null;
    },

    getOkText() {
      return this.okText ? this.okText : 'Ok';
    },

    getPrimaryBtnClass() {
      return this.destructive ? 'Vlt-btn--destructive' : 'Vlt-btn--secondary';
    },

    setFocusToCofirmButton() {
      if (this.noFooter) {
        return;
      }
      const vm = this;
      // due to v-if if the modal is mounted with visible = false the button will not
      // yet be mounted so we need to wait for the next tick to set the focus
      Vue.nextTick(() => {
        if (vm.$refs) {
          vm.$refs.confirmButton.focus();
        }
      });
    },
  },

  beforeMount() {
    if (this.dynamic) {
      document.body.appendChild(this.$el);
    }
  },

  watch: {
    visible(value) {
      if (value) this.setFocusToCofirmButton();
    },
  },
};
</script>
