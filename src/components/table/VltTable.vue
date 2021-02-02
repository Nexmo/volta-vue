<template>
  <div>
    <div v-if="rows.length > 0" :id="id" :class="classObject" class="Vlt-table">
      <table>
        <thead>
          <tr>
            <th
              v-for="(col, index) in columns"
              :key="index"
              :class="{
                'Vlt-table__col--sortable': col.sortable,
                'Vlt-table__col--ascending': currentSortColumn === col && !isAsc,
                'Vlt-table__col--descending': currentSortColumn === col && isAsc,
              }"
              @click="sort(col)"
            >
              {{ col.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in visibleRows" :key="index" @click="clickRow(row)">
            <slot :item="row" :index="index" name="item"></slot>
          </tr>
          <slot :rows="visibleRows" name="rows" />
        </tbody>
      </table>
    </div>

    <pagination
      v-if="pagination && !rows.length !== 0"
      :pages="pages"
      :new-current-page="newCurrentPage"
      :total-pages="totalPages"
      :page-changed="pageChanged"
      :pagination-right-ellipsis="paginationRightEllipsis"
      :pagination-left-ellipsis="paginationLeftEllipsis"
    />

    <div v-if="rows.length === 0" class="Vlt-empty Vlt-empty--search">
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
    name: 'vlt-table',

    components: {
      Pagination,
    },
    // TODO: currently sorting / pagination is only client side, improve
    // so that if available sorting / pagination is doen by the server

    mixins: [paginationMixin],

    props: {
      columns: {
        type: Array,
        default: () => [],
      },
      data: {
        type: Boolean,
        default: false,
      },
      dataCols: {
        type: Boolean,
        default: false,
      },
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
    },

    data() {
      return {
        currentSortColumn: {},
        isAsc: undefined,
        newRows: this.rows,
        newRowsTotal: this.rows.length,
        newCurrentPage: this.currentPage,
      };
    },

    computed: {
      classObject() {
        return {
          'Vlt-table--data': this.data || this.dataCols,
          'Vlt-table--data--cols': this.dataCols,
          'Vlt-table--mobile-stack': this.mobile,
        };
      },

      visibleRows() {
        if (!this.pagination) return this.newRows;

        const currentPage = this.newCurrentPage;

        if (this.newRows.length <= this.pageSize) {
          return this.newRows;
        }
        const start = (currentPage - 1) * this.pageSize;
        const end = parseInt(start, 10) + parseInt(this.pageSize, 10);
        return this.newRows.slice(start, end);
      },
    },

    watch: {
      rows(newRows) {
        this.newRows = newRows;
        this.sort(this.currentSortColumn, true);
        this.newRowsTotal = newRows.length;
      },

      currentPage(newCurrentPage) {
        this.newCurrentPage = newCurrentPage;
      },
    },

    methods: {
      clickRow(row) {
        this.$emit('click', row);
      },
    },
  };
</script>
