<template>
  <li>
    <vlt-sidemenu-trigger :icon="triggerIcon" :label="triggerLabel" :color="color" />
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
      color: String,
      triggerIcon: String,
      triggerLabel: String,
    },

    components: {
      VltSidemenuTrigger,
    },
  };
</script>
