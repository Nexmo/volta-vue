const paginationMixin = {
  name: 'vlt-table',

  props: {
    currentPage: {
      type: Number,
      default: 1,
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

  computed: {
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
            click: event => {
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
      return (
        this.totalPages > 9 && this.pages.length && this.pages[this.pages.length - 1].number !== this.totalPages - 1
      );
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

    pageChanged(page) {
      this.newCurrentPage = page;
      this.$emit('page-change', this.newCurrentPage);
    },
  },
};

export default paginationMixin;
