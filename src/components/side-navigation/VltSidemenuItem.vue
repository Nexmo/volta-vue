<template>
  <li>
    <vlt-sidemenu-trigger :icon="triggerIcon" :label="triggerLabel"/>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import VltSidemenuTrigger from './VltSidemenuTrigger';

export default {
  name: 'VltSidemenuItem',

  props: {
    triggerIcon: String,
    triggerLabel: String,
  },

  components: {
    VltSidemenuTrigger,
  },
};
</script>
