<template>
  <div :class="classNames" class="Vlt-accordion__item">
    <div :class="headerClassNames" class="Vlt-accordion__trigger" @click="toggleCollapsible">
      <slot name="header"><div>Need header content</div></slot>
    </div>
    <div :class="contentClassNames" class="Vlt-accordion__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VltIcon from '../icon/VltIcon';

export default {
  name: 'vlt-accordion-item',

  components: {
    VltIcon,
  },

  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isExpanded: false,
    };
  },

  computed: {
    classNames() {
      return {
        'Vlt-accordion__item_opened': this.isExpanded,
      };
    },
    contentClassNames() {
      return {
        'Vlt-accordion__content_open': this.isExpanded,
      };
    },
    headerClassNames() {
      return {
        'Vlt-accordion__trigger_active': this.isExpanded,
      };
    },
  },

  watch: {
    expanded(val) {
      this.isExpanded = val;
    },
    isExpanded(val) {
      this.$emit('expanded', val);
    },
  },

  mounted() {
    this.isExpanded = this.expanded;
  },

  methods: {
    toggleCollapsible() {
      this.isExpanded = !this.expanded;
    },
  },
};
</script>
