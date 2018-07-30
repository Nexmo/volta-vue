<template>
  <h2 class="Vlt-title--icon">
    <vlt-icon :color="iconColor" :icon="icon" />{{title}}
  </h2>
</template>

<script>
import VltIcon from './VltIcon';

export default {
  name: 'VltTitle',

  props: {
    iconColor: String,
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },

  components: {
    VltIcon,
  },
};
</script>
