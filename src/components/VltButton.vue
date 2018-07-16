<template functional>
  <button class="Vlt-btn Vlt-btn--no-focus" 
          :class="[{'Vlt-btn--icon': !props.label, 'Vlt-btn--disabled': props.disabled, 'Vlt-btn--app': props.app, 'Vlt-btn--primary': props.primary,
          'Vlt-btn--secondary': props.secondary, 'Vlt-btn--destructive': props.destructive, 'Vlt-btn--tertiary': !(props.secondary || props.primary || props.destructive),
          'Vlt-btn--small': props.small, 'Vlt-btn--large': props.large}, data.staticClass, data.class]"
          v-on="listeners">
    <vlt-icon v-if="props.icon" :spin="props.spin" :icon="props.icon" />
    {{props.label}}
	</button>
</template>

<script>
  import VltIcon from './VltIcon';

  export default {
    name: 'vlt-button',

    components: {
      VltIcon
    },

    props: {
      app: {
        type: Boolean,
        default: false
      },
      destructive: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: false
      },
      large: {
        type: Boolean,
        default: false
      },
      primary: {
        type: Boolean,
        default: false
      },
      secondary: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      spin: {
        type: Boolean,
        default: false
      },
      tooltipTitle: {
        type: String,
        default: ''
      }
    }
  };
</script>