<template>
  <div class="Vlt-badge" :class="classObject">
    <slot></slot>
    <button v-if="dismissable" @click="dismiss()" class="Vlt-badge__dismiss"></button>
  </div>
</template>

<script>
    export default {
      name: "vlt-badge",

      props: {
        color: String,
        dismissable: Boolean,
        large: Boolean,
        small: Boolean
      },

      data: function() {
        return {
          dismissed: false
        }
      },

      computed: {
        classObject: function() {
          let badgeColor;
          let obj = {
            'Vlt-badge--dismissable': this.dismissable,
            'Vlt-badge--dismissed': this.dismissed,
            'Vlt-badge--large': this.large
          }

          if(this.color) {
            badgeColor = `Vlt-badge--${this.color}`;
            obj[badgeColor] = true;
          }
          return obj;
        }
      },

      methods: {
        dismiss: function() {
          this.dismissed = true;        
          this.$emit('dismissed');     
        }
      }
    }
</script>