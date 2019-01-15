<template>
  <div>
    <div v-if="rows.length > 0" :id="id" :class="classObject" class="Vlt-table">
      <table>
        <thead>
          <tr>
            <th v-for="(col, index) in columns" :key="index" @click="sort(col)"
              :class="{
                'Vlt-table__col--sortable': col.sortable,
                'Vlt-table__col--ascending': currentSortColumn === col && !isAsc,
                'Vlt-table__col--descending': currentSortColumn === col && isAsc,
              }">
              {{col.title}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in visibleRows" @click="clickRow(row)" :key="index">
            <slot name="item" :item="row" :index="index"></slot>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="rows.length > 0 && pagination" class="Vlt-table__pagination">
      <ul>
          <li v-if="newCurrentPage !== 1">
              <a href="#" @click.prevent="pageChanged(newCurrentPage-1)">Prev</a>
          </li>
          <li :class="{ 'Vlt-table__pagination__current': newCurrentPage === 1 }">
              <a href="#" @click.prevent="pageChanged(1)">1</a>
          </li>
          <li v-if="paginationLeftEllipsis">...</li>
          <li v-for="page in pages" :key="page.number"
             :class="{ 'Vlt-table__pagination__current': page.number === newCurrentPage }">
              <a href="#" @click.prevent="page.click">{{ page.number }}</a>
          </li>
          <li v-if="paginationRightEllipsis">...</li>
          <li :class="{ 'Vlt-table__pagination__current': newCurrentPage === totalPages }">
              <a href="#" @click.prevent="pageChanged(totalPages)">{{ totalPages }}</a>
          </li>
          <li v-if="newCurrentPage !== totalPages">
              <a href="#" @click.prevent="pageChanged(newCurrentPage+1)">Next</a>
          </li>
      </ul>
    </div>

    <div v-if="rows.length === 0" class="Vlt-empty Vlt-empty--search">
      <div class="Vlt-empty__content">
        <p>{{ emptyMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vlt-table',

  // TODO: currently sorting / pagination is only client side, improve
  // so that if available sorting / pagination is doen by the server

  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    currentPage: {
      type: Number,
      default: 1,
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
    },
    mobile: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Boolean,
      default: false,
    },
    pageSize: {
      type: [Number, String],
      default: 20,
    },
    rows: {
      type: Array,
      default: () => [],
    },
    total: {
      type: [Number, String],
      default: 0,
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

    totalPages() {
      const actualTotal = this.total ? this.total : this.newRowsTotal;
      return Math.ceil(actualTotal / this.pageSize);
    },

    pages() {
      let left;
      let right;
      const pages = [];

      if (this.totalPages > 9) {
        left = this.currentPage - 3;
        if (left <= 1) {
          left = 2;
        }

        right = this.currentPage + 3;
        if (right >= this.totalPages - 1) {
          right = this.totalPages - 1;
        }
      } else if (this.totalPages >= 4) {
        left = 2;
        right = this.totalPages - 1;
      } else if (this.totalPages === 3) {
        left = 2;
        right = 2;
      }

      if (left && right) {
        for (let i = left; i <= right; i += 1) {
          pages.push({
            number: i,
            click: (event) => {
              this.pageChanged(i);
              // Set focus on element to keep tab order
              this.$nextTick(() => event.target.focus());
            },
          });
        }
      }
      return pages;
    },

    paginationLeftEllipsis() {
      return this.totalPages > 9 && this.pages.length && this.pages[0].number !== 2;
    },

    paginationRightEllipsis() {
      return this.totalPages > 9
             && this.pages.length
             && this.pages[this.pages.length - 1].number !== this.totalPages - 1;
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
    sortBy(array, property, isAsc) {
      const sorted = [...array].sort((a, b) => {
        let aVal = a[property];
        let bVal = b[property];

        if (!aVal && aVal !== 0) return 1;
        if (!bVal && bVal !== 0) return -1;
        if (aVal === bVal) return 0;

        aVal = typeof aVal === 'string' ? aVal.toUpperCase() : aVal;

        bVal = typeof bVal === 'string' ? bVal.toUpperCase() : bVal;

        if (isAsc) {
          return aVal > bVal ? 1 : -1;
        }
        return aVal > bVal ? -1 : 1;
      });

      return sorted;
    },

    sort(column, updatingData = false) {
      if (!column || !column.sortable) return;

      if (!updatingData) {
        if (!this.isAsc) this.isAsc = true;
        else {
          this.isAsc = column === this.currentSortColumn ? !this.isAsc : true;
        }
      }
      this.newRows = this.sortBy(this.newRows, column.property, this.isAsc);
      this.currentSortColumn = column;
    },

    clickRow(row) {
      this.$emit('click', row);
    },

    pageChanged(page) {
      this.newCurrentPage = page;
      this.$emit('page-change', this.newCurrentPage);
    },
  },
};
</script>
<style lang="scss" scoped>
.Vlt-table__pagination {
  height: 35px;
}
</style>
