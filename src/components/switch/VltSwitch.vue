<template>
  <div :id="id" class="Vlt-switch" :class="{'Vlt-switch--red': red, 'Vlt-switch--small': small}">
    <label>
      <input type="checkbox" v-on:change="onChange" :checked="checked" />
      <!-- Without @click.stop, click on switch will trigger 2 click events, one for the input
      and one for span.Vlt-switch__slider -->
      <span @click.stop class="Vlt-switch__slider"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'vlt-switch',

  props: {
    id: {
      type: String,
      required: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    red: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onChange(event) {
      this.$emit('input', event.target.checked);
    },
  },
};
</script>
