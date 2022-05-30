<template>
  <button
    class="Vlt-btn Vlt-btn--no-focus"
    :class="[
      {
        'Vlt-btn--icon': !label,
        'Vlt-btn--disabled': disabled,
        'Vlt-btn--app': app,
        'Vlt-btn--primary': primary,
        'Vlt-btn--quaternary': quaternary,
        'Vlt-btn--secondary': secondary,
        'Vlt-btn--destructive': destructive,
        'Vlt-btn--tertiary': !(secondary || primary || destructive || quaternary),
        'Vlt-btn--small': small,
        'Vlt-btn--large': large,
      },
      $data.staticClass,
      $data.class,
    ]"
    :id="id"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <vlt-icon v-if="icon" :icon="icon"></vlt-icon>
    <vlt-spinner v-if="spinner || spinnerWhite" :smaller="true" :white="spinnerWhite"></vlt-spinner>
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
  import VltIcon from '../icon/VltIcon';
  import VltSpinner from '../spinner/VltSpinner';

  export default {
    name: 'vlt-button',

    components: {
      VltSpinner,
      VltIcon,
    },

    props: {
      app: {
        type: Boolean,
        default: false,
      },
      destructive: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      id: {
        type: String,
        required: false,
      },
      icon: {
        type: String,
        required: false,
      },
      label: {
        type: String,
        required: false,
      },
      large: {
        type: Boolean,
        default: false,
      },
      primary: {
        type: Boolean,
        default: false,
      },
      quaternary: {
        type: Boolean,
        default: false,
      },
      secondary: {
        type: Boolean,
        default: false,
      },
      small: {
        type: Boolean,
        default: false,
      },
      tooltipTitle: {
        type: String,
        default: '',
      },
      spinner: {
        type: Boolean,
        default: false,
      },
      spinnerWhite: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
