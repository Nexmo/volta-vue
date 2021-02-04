<template>
  <div>
    <div v-if="!isEmpty" :id="id" :class="gridClass" :style="style">
      <slot name="rows"></slot>
    </div>

    <pagination
      v-if="pagination && !isEmpty"
      :pages="pages"
      :new-current-page="newCurrentPage"
      :total-pages="totalPages"
      :page-changed="pageChanged"
      :pagination-right-ellipsis="paginationRightEllipsis"
      :pagination-left-ellipsis="paginationLeftEllipsis"
    />

    <div v-if="isEmpty" class="Vlt-empty Vlt-empty--search">
      <div class="Vlt-empty__content">
        <slot name="empty-message"
          ><p>{{ emptyMessage }}</p></slot
        >
      </div>
    </div>
  </div>
</template>

<script>
  import paginationMixin from '../../mixins/pagination';
  import Pagination from '../pagination/Pagination';

  export default {
    name: 'vlt-grid-list',

    components: {
      Pagination,
    },

    mixins: [paginationMixin],

    props: {
      emptyMessage: {
        type: String,
        default: 'There are no results for this search',
      },
      id: {
        type: String,
        required: false,
        default: '',
      },
      mobile: {
        type: Boolean,
        default: false,
      },
      currentSortColumn: {
        type: Object,
        default: () => ({}),
      },
      classNames: {
        type: String,
        required: false,
        default: '',
      },
      numberOfColumns: {
        type: Number,
        required: false,
        default: 1,
      },
      gap: {
        type: Number,
        required: false,
        default: 10,
      },
      custom: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        newRows: this.rows,
        newCurrentPage: this.currentPage,
      };
    },

    computed: {
      gridClass() {
        return `${this.classNames} ${this.custom ? 'grid-list' : 'Vlt-grid'}`;
      },
      newRowsTotal() {
        return this.rows.length;
      },
      isEmpty() {
        return !this.newRowsTotal;
      },
      style() {
        return this.custom
          ? `grid-template-columns: repeat(${this.numberOfColumns}, 1fr); grid-gap: ${this.gap}px`
          : '';
      },
    },

    watch: {
      rows(newRows) {
        this.newRows = newRows;
        this.sort(this.currentSortColumn, true);
      },

      currentPage(newCurrentPage) {
        this.newCurrentPage = newCurrentPage;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .grid-list {
    display: grid;
  }
</style>
