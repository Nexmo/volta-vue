<template>
  <div class="Vlt-checkbox" :class="{ 'Vlt-checkbox--inline': inline }">
    <label>
      <span class="Vlt-checkbox__button">
        <input type="checkbox" :id="id" v-on="inputListeners" :checked="checked" :disabled="disabled"/>
        <span class="Vlt-checkbox__icon"></span>
      </span>
      {{label}} <vlt-tooltip v-if="tooltipTitle" :position="tooltipPosition" :title="tooltipTitle" />
    </label>
  </div>
</template>

<script>
  import VltTooltip from './VltTooltip';

  export default {
    name: "vlt-checkbox",

    props: {
      checked: Boolean, 
      disabled: {
        type: Boolean,
        default: false
      },
      id: String,
      inline: {
        type: Boolean,
        default: false
      },
      label: String,
      tooltipPosition: {
        type: String,
        required: false
      },
      tooltipTitle: {
        type: String,
        required: false
      },
    },

    components: {
      VltTooltip
    },

    computed: {
      inputListeners: function() {
        let vm = this;

        return Object.assign({}, this.$listeners, {
          input: function(event) {  
            vm.$emit('input', event.target.checked)
          }
        })
      }
    }
  }
</script>