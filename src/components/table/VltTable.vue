<template>
  <div>
    <div v-if="rows.length > 0" :id="id" :class="classObject" class="Vlt-table">
      <table>
        <thead>
          <tr>
            <th v-if="showCheckboxSelector" class="Vlt-checkbox-col">
              <vlt-checkbox
                :id="`${id}-headerSelectAllCheckbox`"
                :checked="isSelectAllChecked"
                label=""
                @input="emitSelectAll"
              />
            </th>
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
              <vlt-tooltip v-if="col.tooltipText" position="top" :title="col.tooltipText">
                <vlt-icon icon="info" smaller color="grey-500" />
              </vlt-tooltip>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in visibleRows" :key="index" @click="clickRow($row)">
            <td v-if="showCheckboxSelector">
              <vlt-checkbox
                :id="`${index}-row-checkbox`"
                :checked="isCheckboxChecked(row)"
                label=""
                @click="$event => emitRowSelect($event, row)"
              />
            </td>
            <slot :item="row" :index="index" name="item" />
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
        <slot name="empty-message">
          <p>{{ emptyMessage }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  import paginationMixin from '../../mixins/pagination';
  import Pagination from '../pagination/Pagination';
  import VltTooltip from '../tooltip/VltTooltip';
  import VltIcon from '../icon/VltIcon';
  import VltCheckbox from '../checkbox/VltCheckbox';

  export default {
    name: 'VltTable',

    components: {
      Pagination,
      VltTooltip,
      VltIcon,
      VltCheckbox,
    },
    // TODO: currently sorting / pagination is only client side, improve
    // so that if available sorting / pagination is done by the server

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
      showCheckboxSelector: {
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
        isSelectAllChecked: false,
        listRowsSelected: [],
      };
    },

    computed: {
      columnsContainTooltip() {
        return !!this.columns.find(item => item.tooltipText);
      },

      classObject() {
        return {
          'Vlt-table--data': this.data || this.dataCols,
          'Vlt-table--data--cols': this.dataCols,
          'Vlt-table--mobile-stack': this.mobile,
          'Vlt-overflow-initial': this.columnsContainTooltip,
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

      emitSelectAll(val) {
        this.isSelectAllChecked = val;
        if (val) {
          this.listRowsSelected = []; // clear list of individual selectedcheckboxes when select all box is selected
        }
        this.$emit('selectAll', val);
      },

      isCheckboxChecked(row) {
        return this.listRowsSelected.includes(row) || this.isSelectAllChecked;
      },

      emitRowSelect($event, row) {
        $event.stopPropagation();
        const isChecked = $event.target.checked;
        if (!isChecked && this.isSelectAllChecked) {
          // user previously clicked "Select All" and now is unticking a single box
          // we untick the "Select All" and add all rows other than the one unticked
          this.isSelectAllChecked = false;
          this.listRowsSelected = this.rows.filter(item => item !== row);
        } else if (isChecked && !this.listRowsSelected.includes(row)) {
          this.listRowsSelected.push(row);
        } else if (!isChecked && this.listRowsSelected.includes(row)) {
          this.listRowsSelected = this.listRowsSelected.filter(item => item !== row);
        }
        this.$emit('selectRow', { isChecked, listRowsSelected: this.listRowsSelected });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .Vlt-overflow-initial {
    overflow: initial;
  }

  .Vlt-checkbox-col {
    width: 50px;
  }
</style>
