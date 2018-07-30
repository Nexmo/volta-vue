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
  name: 'VltSelect',

  props: {
    id: String,
    options: Array,
  },
};
</script>
