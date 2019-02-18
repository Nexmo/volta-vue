<template>
  <router-link
    v-if="to"
    :id="id"
    class="Vlt-sidemenu__link"
    :to="to"
    active-class="Vlt-sidemenu__link_active"
    :exact="exact"
  >
    <vlt-icon :icon="icon" :color="color" />
    <span class="Vlt-sidemenu__label">{{label}}</span>
  </router-link>

  <a
    v-else
    class="Vlt-sidemenu__link "
    :href="href"
    :id="id"
    active-class="Vlt-sidemenu__link_active"
    :target="external ? '_blank' : ''"
  >
    <vlt-icon :icon="icon" :color="color" />
    <span class="Vlt-sidemenu__label">{{label}}</span>
  </a>
</template>

<script>
import VltIcon from '../icon/VltIcon';

export default {
  name: 'VltSidemenuLink',

  props: {
    color: String,
    exact: {
      type: Boolean,
      default: false,
    },
    external: Boolean,
    href: String,
    id: String,
    icon: String,
    label: String,
    to: String,
  },

  components: {
    VltIcon,
  },
};
</script>
