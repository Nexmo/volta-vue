<template>
  <div class="Vlt-table__pagination">
    <ul>
      <li v-if="newCurrentPage !== 1" class="Vlt-table__pagination__prev">
        <a href="#" @click.prevent="pageChanged(newCurrentPage - 1)">Prev</a>
      </li>
      <li :class="{ 'Vlt-table__pagination__current': newCurrentPage === 1 }">
        <a href="#" @click.prevent="pageChanged(1)">1</a>
      </li>
      <li v-if="paginationLeftEllipsis">...</li>
      <li
        v-for="page in pages"
        :key="page.number"
        :class="{ 'Vlt-table__pagination__current': page.number === newCurrentPage }"
      >
        <a href="#" @click.prevent="page.click">{{ page.number }}</a>
      </li>
      <li v-if="paginationRightEllipsis">...</li>
      <li :class="{ 'Vlt-table__pagination__current': newCurrentPage === totalPages }">
        <a href="#" @click.prevent="pageChanged(totalPages)">{{ totalPages }}</a>
      </li>
      <li v-if="newCurrentPage !== totalPages" class="Vlt-table__pagination__next">
        <a href="#" @click.prevent="pageChanged(newCurrentPage + 1)">Next</a>
      </li>
    </ul>
  </div>
</template>

<script>
// TODO: pagination should wrap both table and grid list so the scroll pagination can be added here
export default {
  name: 'pagination',

  props: {
    pageChanged: {
      type: Function,
      default: () => {},
    },
    totalPages: {
      type: Number,
      default: 1,
    },
    newCurrentPage: {
      type: Number,
      default: 1,
    },
    paginationRightEllipsis: {
      type: Boolean,
      default: false,
    },
    paginationLeftEllipsis: {
      type: Boolean,
      default: false,
    },
    pages: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
  .Vlt-table__pagination {
    height: 35px;
  }
</style>
