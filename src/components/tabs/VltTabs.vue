<template>
  <div class="Vlt-tabs">
    <ul
      :class="{ 'Vlt-tabs__header--bordered': bordered, 'Vlt-tabs__header--shadow': shadow }"
      class="Vlt-tabs__header"
    >
      <li
        v-for="(tab, index) in tabs"
        :id="tab.id ? `${tab.id}-header` : ''"
        :class="{ 'Vlt-tabs__link_active': index === activeTab, 'Vlt-tabs__link_disabled': tab.disabled }"
        :key="index"
        class="Vlt-tabs__link"
        @click="selectTab(index)"
      >
        <vlt-icon v-if="tab.iconName && !hasIcons" :icon="tab.iconName" no-class />
        <vlt-tooltip v-if="hasIcons" :title="tab.label">
          <vlt-icon :icon="tab.iconName" no-class />
        </vlt-tooltip>
        <span v-else>{{ tab.label }}</span>
      </li>
    </ul>
    <div class="Vlt-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import VltIcon from '../icon/VltIcon';
  import VltTooltip from '../tooltip/VltTooltip';

  export default {
    name: 'vlt-tabs',

    components: {
      VltIcon,
      VltTooltip,
    },

    props: {
      activeIndex: {
        type: Number,
        default: 0,
      },
      bordered: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: Boolean,
        default: false,
      },
      id: {
        type: String,
        required: false,
      },
      shadow: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        activeTab: 0,
        tabs: [],
        hasIcons: false,
      };
    },

    watch: {
      activeIndex(val) {
        this.activeTab = val;
        this.updateTabsActive();
      },
    },

    mounted() {
      this.activeTab = this.activeIndex;
      this.updateTabsActive();
      this.hasIcons = this.icon;
    },

    methods: {
      selectTab(index) {
        this.activeTab = index;
        this.updateTabsActive();
        this.$emit('change', index);
      },

      updateTabsActive() {
        this.tabs.forEach((tab, i) => {
          if (this.activeTab === i) {
            tab.activate();
          } else {
            tab.deactivate();
          }
        });
      },
    },
  };
</script>
