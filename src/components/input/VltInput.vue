<template>
  <div :class="[{ 'Vlt-input': !textarea, 'Vlt-textarea': textarea }, className]">
    <textarea
      v-if="textarea"
      :disabled="disabled"
      :id="id"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :rows="rows"
      :value="val"
      v-on="inputListeners"
      v-bind="additionalAttributes"
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
      v-bind="additionalAttributes"
    />
    <label v-if="label">{{ label }}</label>
    <small v-if="hint" class="Vlt-form__element__hint">{{ hint }}</small>
  </div>
</template>

<script>
  export default {
    name: 'vlt-input',

    props: {
      additionalAttributes: {
        type: Object,
        required: false,
      },
      className: {
        type: String,
        required: false,
        default: () => '',
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      hint: {
        type: String,
        required: false,
      },
      id: {
        type: String,
        required: false,
      },
      // used for big input elements
      label: {
        type: String,
        required: false,
      },
      max: {
        type: String,
        required: false,
      },
      maxlength: {
        type: String,
        required: false,
      },
      min: {
        type: String,
        required: false,
      },
      placeholder: {
        type: String,
        required: false,
      },
      rows: {
        type: [Number, String],
        required: false,
      },
      size: {
        type: [Number, String],
        required: false,
      },
      textarea: {
        default: false,
        type: Boolean,
      },
      type: {
        default: 'text',
        type: String,
      },
      val: {
        type: [Number, String],
        required: false,
      },
    },

    computed: {
      inputListeners() {
        const vm = this;

        return {
          ...this.$listeners,
          input(event) {
            vm.$emit('input', event.target.value);
          },
        };
      },
    },
  };
</script>
