<template>
  <div :id="id" class="Vlt-radio" :class="{ 'Vlt-radio--inline': inline }">
    <label>
      <span class="Vlt-radio__button">
        <input type="radio" :checked="checked" :disabled="disabled" :name="name" :value="val" @change="emitValue" />
        <span class="Vlt-radio__icon"></span>
      </span>
      <span>
        {{ label }}
        <small v-if="hint" class="Vlt-radio__hint">{{ hint }}</small>
      </span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'vlt-radio',

    props: {
      checked: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
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
      inline: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      // need to use 'val' so we can emit the value to the parent, value does not work with v-model
      val: {
        type: [String, Number],
        required: true,
      },
    },

    methods: {
      emitValue($event) {
        this.$emit('input', $event.target.value);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@vonagevolta/volta2/scss/lib/_variables.scss';

  .Vlt-radio__hint {
    color: $grey-darker;
    display: flex;
  }
</style>
