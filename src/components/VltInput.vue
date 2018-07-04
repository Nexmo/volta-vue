<template>
  <div>
    <div :class="{'Vlt-input': !textarea, 'Vlt-textarea': textarea}">
      <textarea v-if="textarea" :id="id" :value="val" :maxlength="maxlength" v-on="inputListeners"></textarea>
      <input v-else :disabled="disabled" :type="type" :value="val" :id="id" v-on="inputListeners" :maxlength="maxlength" :min="min" :max="max" :placeholder="placeholder" />
      <label v-if="label">{{label}}</label>
    </div>
    <small class="Vlt-form__element__hint">{{hint}}</small>
  </div>
</template>

<script>
    export default {
      name: "vlt-input",

      props: {
        disabled: Boolean,
        hint: String,
        id: String,
        //used for big input elements
        label: String,
        max: Number,
        maxlength: Number,
        min: Number,
        placeholder: String,
        textarea: {
          default: false,
          type: Boolean
        },
        type: {
          default: "text",
          type: String
        },
        val: String|Number
      },

      computed: {
        inputListeners: function() {
          let vm = this

          return Object.assign({}, this.$listeners, {
            input: function(event) {  
              vm.$emit('input', event.target.value);
            }
          })
        }
      }
    }
</script>