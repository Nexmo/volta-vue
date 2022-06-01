<template>
  <p v-click-outside :id="id" class="Vlt-sidemenu__trigger" :class="classObject" @click="isActive = !isActive">
    <vlt-icon :icon="icon" :color="color" />
    <span class="Vlt-sidemenu__label">{{ label }}</span>
    <vlt-badge v-if="badge" :color="badgeColor">{{ badge }}</vlt-badge>
  </p>
</template>

<script>
  /* eslint-disable no-param-reassign */
  import { createApp, getCurrentInstance } from 'vue';
  import VltIcon from '../icon/VltIcon';
  import VltBadge from '../badge/VltBadge';

  createApp({});

  export default {
    name: 'vlt-sidemenu-trigger',

    // setup custom directive for component, this is hacky as hell but it works
    // TODO: refactor into internal hooks methods and remove directive
    setup() {
      const { appContext }  = getCurrentInstance();
      if (!('click-outside' in appContext.directives)) {
        appContext.app.directive('click-outside', {
          beforeMount(el, binding, vnode) {
            const vm = binding.instance;
            vm.event = () => {
              if (vm.collapsed) {
                vm.isActive = false;
              }
            };

            vm.stopProp = event => {
              event.stopPropagation();
            };

            el.addEventListener('click', vm.stopProp);
            document.body.addEventListener('click', vm.event);
          },

          unmounted(el, binding, vnode) {
            el.removeEventListener('click', binding.instance.stopProp);
            document.body.removeEventListener('click', binding.instance.event);
          },
        });
      }
    },

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
    margin-right: 20px !important;
  }
</style>
