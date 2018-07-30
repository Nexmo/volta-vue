<template>
  <p
    :id="id"
    class="Vlt-sidemenu__trigger"
    :class="{ 'Vlt-sidemenu__trigger_active' : active }"
    @click="active = !active">
    <vlt-icon :icon="icon" :color="color" />
    <span class="Vlt-sidemenu__label">{{label}}</span>
  </p>
</template>

<script>
import VltIcon from '../VltIcon';

export default {
  name: 'VltSidemenuTrigger',

  props: {
    color: String,
    icon: String,
    id: String,
    label: String,
  },

  data() {
    return {
      active: false,
    };
  },

  components: {
    VltIcon,
  },
};
</script>
