<template>
  <div>
    <div :class="{'Vlt-input': !textarea, 'Vlt-textarea': textarea}">
      <textarea
        v-if="textarea"
        :id="id"
        :maxlength="maxlength"
        :rows="rows"
        :value="val"
        v-on="inputListeners"
      />
      <input
        v-else
        :disabled="disabled"
        :id="id"
        :max="max"
        :maxlength="maxlength"
        :min="min"
        :size="size"
        :placeholder="placeholder"
        :type="type"
        :value="val"
        v-on="inputListeners"
      />
      <label v-if="label">{{label}}</label>
    </div>
    <small v-if="hint" class="Vlt-form__element__hint">{{hint}}</small>
  </div>
</template>

<script>
export default {
  name: 'vlt-input',

  props: {
    disabled: Boolean,
    hint: String,
    id: String,
    // used for big input elements
    label: String,
    max: String,
    maxlength: String,
    min: String,
    placeholder: String,
    rows: Number | String,
    size: Number | String,
    textarea: {
      default: false,
      type: Boolean,
    },
    type: {
      default: 'text',
      type: String,
    },
    val: String || Number,
  },

  computed: {
    inputListeners() {
      const vm = this;

      return Object.assign({}, this.$listeners, {
        input(event) {
          vm.$emit('input', event.target.value);
        },
      });
    },
  },
};
</script>
