<template>
  <div
    :id="id"
    class="Vlt-tabs__panel"
    :class="{ 'Vlt-tabs__panel_active': active, 'Vlt-tabs__panel_disabled': disabled }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vlt-tab',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      active: false,
      iconName: undefined,
    };
  },

  created() {
    this.$parent.tabs.push(this);
  },

  mounted() {
    this.iconName = this.icon;
  },

  methods: {
    activate() {
      this.active = true;
    },

    deactivate() {
      this.active = false;
    },
  },

  beforeDestroy() {
    const index = this.$parent.tabs.indexOf(this);
    if (index >= 0) {
      this.$parent.tabs.splice(index, 1);
    }
  },
};
</script>
