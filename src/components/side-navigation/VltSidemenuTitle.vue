<template>
  <li role="separator">
    <h5 class="Vlt-sidemenu__title">{{label}}</h5>
  </li>
</template>

<script>
export default {
  name: 'VltSidemenuTitle',

  props: {
    label: String,
  },
};
</script>
