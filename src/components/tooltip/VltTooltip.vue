<template>
  <span :id="id" class="Vlt-tooltip">
    <slot>
      <vlt-icon class="Vlt-blue" icon="help-negative" small></vlt-icon>
    </slot>
  </span>
</template>
<script>
  import Tooltip from 'tooltip.js';
  import VltIcon from '../icon/VltIcon';

  export default {
    name: 'vlt-tooltip',

    props: {
      position: {
        type: String,
        required: false,
      },
      id: {
        type: String,
        required: false,
      },
      title: {
        type: String,
        required: true,
      },
      large: {
        type: Boolean,
        default: false,
      },
    },

    components: {
      VltIcon,
    },

    mounted() {
      return new Tooltip(this.$el, {
        html: true,
        template: `<div class="Vlt-tooltip--js ${this.large ? 'Vlt-tooltip--large' : ''}" role="tooltip">
                      <div class="tooltip-arrow Vlt-tooltip__arrow"></div>
                      <div class="tooltip-inner Vlt-tooltip__content"></div>
                    </div>`,
        title: this.title,
        placement: this.position || 'left',
      });
    },
  };
</script>
