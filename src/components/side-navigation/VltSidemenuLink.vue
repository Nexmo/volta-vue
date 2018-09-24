<template>
  <router-link
    v-if="to"
    class="Vlt-sidemenu__link "
    :to="to"
    active-class="Vlt-sidemenu__link_active"
    exact
  >
    <vlt-icon :icon="icon" :color="color" />
    <span class="Vlt-sidemenu__label">{{label}}</span>
  </router-link>

  <a
    v-else
    class="Vlt-sidemenu__link "
    :href="href"
    active-class="Vlt-sidemenu__link_active"
    :target="external ? '_blank' : ''"
  >
    <vlt-icon :icon="icon" :color="color" />
    <span class="Vlt-sidemenu__label">{{label}}</span>
  </a>
</template>

<script>
import VltIcon from '../VltIcon';

export default {
  name: 'VltSidemenuLink',

  props: {
    color: String,
    external: Boolean,
    href: String,
    icon: String,
    label: String,
    to: String,
  },

  components: {
    VltIcon,
  },
};
</script>
