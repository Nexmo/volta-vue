<template functional>
  <button
    class="Vlt-btn Vlt-btn--no-focus"
    :class="[
      {
        'Vlt-btn--icon': !props.label,
        'Vlt-btn--disabled': props.disabled,
        'Vlt-btn--app': props.app,
        'Vlt-btn--primary': props.primary,
        'Vlt-btn--quaternary': props.quaternary,
        'Vlt-btn--secondary': props.secondary,
        'Vlt-btn--destructive': props.destructive,
        'Vlt-btn--tertiary': !(props.secondary || props.primary || props.destructive || props.quaternary),
        'Vlt-btn--small': props.small,
        'Vlt-btn--large': props.large,
      },
      data.staticClass,
      data.class,
    ]"
    :id="props.id"
    :disabled="props.disabled"
    v-on="listeners"
  >
    <component v-if="props.icon" :is="injections.components.VltIcon" :icon="props.icon"></component>
    <component
      v-if="props.spinner || props.spinnerWhite"
      :is="injections.components.VltSpinner"
      :smaller="true"
      :white="props.spinnerWhite"
    ></component>
    <slot>{{ props.label }}</slot>
  </button>
</template>

<script>
  import VltIcon from '../icon/VltIcon';
  import VltSpinner from '../spinner/VltSpinner';

  export default {
    name: 'vlt-button',

    inject: {
      components: {
        default: {
          VltIcon,
          VltSpinner,
        },
      },
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
