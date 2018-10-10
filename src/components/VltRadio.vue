<template>
  <div :id="id" class="Vlt-radio" :class="{ 'Vlt-radio--inline': inline }">
    <label>
      <span class="Vlt-radio__button">
        <input
          type="radio"
          :checked="checked"
          :disabled="disabled"
          :name="name"
          :value="val"
          v-on="inputListeners"
        />
        <span class="Vlt-radio__icon"></span>
      </span>
      <span>
        {{label}}
        <small v-if="hint" class="Vlt-radio__hint">{{hint}}</small>
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
      type: String,
      required: false,
    },
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

<style lang="scss" scoped>
@import '~@vonagevolta/core/scss/lib/_variables.scss';

.Vlt-radio__hint {
  color: $grey-darker;
  display: flex;
}
</style>
