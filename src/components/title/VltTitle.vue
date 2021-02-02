<template>
  <h2 class="Vlt-title--icon"><vlt-icon :color="color || iconColor" :icon="icon" />{{ title }}</h2>
</template>

<script>
  import VltIcon from '../icon/VltIcon';

  export default {
    name: 'vlt-title',

    props: {
      color: {
        type: String,
        required: false,
      },
      iconColor: {
        type: String,
        required: false,
      },
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
