<template>
  <div :id="id" :class="classNames" class="Vlt-accordion">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vlt-accordion',

    props: {
      classNames: {
        type: String,
        default: '',
      },
      id: {
        type: String,
        default: '',
      },
    },
  };
</script>
