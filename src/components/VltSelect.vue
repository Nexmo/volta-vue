<template>
  <div class="Vlt-select">
    <select :id="id">
      <option
        v-for="o in options"
        :value="o.value || o"
        :key="o.value || o"
      >
        {{o.label || o}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'vlt-select',

  props: {
    id: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>
