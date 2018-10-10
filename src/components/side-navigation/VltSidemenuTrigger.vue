<template>
  <p
    v-click-outside
    :id="id"
    class="Vlt-sidemenu__trigger"
    :class="classObject"
    @click="isActive = !isActive">
    <vlt-icon :icon="icon" :color="color" />
    <span class="Vlt-sidemenu__label">{{label}}</span>
    <vlt-badge v-if="badge" :color="badgeColor">{{badge}}</vlt-badge>
  </p>
</template>

<script>
/* eslint-disable no-param-reassign */
import Vue from 'vue';
import VltIcon from '../VltIcon';
import VltBadge from '../VltBadge';

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    vnode.context.event = () => {
      if (vnode.context.collapsed) {
        vnode.context.isActive = false;
      }
    };

    vnode.context.stopProp = (event) => {
      event.stopPropagation();
    };

    el.addEventListener('click', vnode.context.stopProp);
    document.body.addEventListener('click', vnode.context.event);
  },

  unbind(el, binding, vnode) {
    el.removeEventListener('click', vnode.context.stopProp);
    document.body.removeEventListener('click', vnode.context.event);
  },
});

export default {
  name: 'vlt-sidemenu-trigger',

  props: {
    active: Boolean,
    badge: String,
    badgeColor: String,
    color: String,
    collapsed: Boolean,
    icon: String,
    id: String,
    label: String,
  },

  data() {
    return {
      isActive: this.active,
    };
  },

  computed: {
    classObject() {
      return {
        'Vlt-sidemenu__trigger_active': this.isActive,
        'Vlt-sidemenu__trigger_current': this.isActive,
      };
    },
  },

  components: {
    VltBadge,
    VltIcon,
  },

  watch: {
    active(value) {
      this.isActive = value;
    },
  },
};
</script>

<style lang="scss" scoped>
  .Vlt-badge {
    margin-right: 20px !important
  }
</style>
