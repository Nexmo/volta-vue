import { mount } from '@vue/test-utils';
import { VltTable } from '..';

const columns = [
  { title: 'Name', sortable: true, property: 'name' },
  { title: 'Position', property: 'position' },
];

const rows = [
  { name: 'Louis', position: 'Front End Developer' },
  { name: 'Mie', position: 'UX Designer' },
  { name: 'Julien', position: 'Java Developer' },
  { name: 'Nisha', position: 'JavaScript Developer' },
];

const fullTableProps = {
  columns,
  rows,
};

describe('vlt-table', () => {
  let wrapper;

  test('renders empty state', () => {
    wrapper = mount(VltTable);
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.vm.columnsContainTooltip).toBeFalsy();
    expect(wrapper.vm.classObject).toStrictEqual({
      'Vlt-overflow-initial': false,
      'Vlt-table--data': false,
      'Vlt-table--data--cols': false,
      'Vlt-table--mobile-stack': false,
    });
  });

  test('renders correctly with two columns, "Name" and "Position"', () => {
    wrapper = mount(VltTable, { propsData: fullTableProps });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly with a tooltip passed in the column object', () => {
    wrapper = mount(VltTable, {
      propsData: {
        columns: [
          ...fullTableProps.columns,
          { title: 'With a tooltip', property: 'position', tooltipText: 'the text will show in a tooltip' },
        ],
        rows: fullTableProps.rows,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.vm.columnsContainTooltip).toBeTruthy();
    expect(wrapper.vm.classObject).toStrictEqual({
      'Vlt-overflow-initial': true,
      'Vlt-table--data': false,
      'Vlt-table--data--cols': false,
      'Vlt-table--mobile-stack': false,
    });
  });

  test('pagination is shown', () => {
    wrapper = mount(VltTable, {
      propsData: {
        ...fullTableProps,
        pageSize: 1,
        pagination: true,
        total: 4,
      },
    });
    expect(wrapper.find('.Vlt-table__pagination')).toMatchSnapshot();
  });

  test('"page-change" is emitted with "3" when navigating to page "3"', () => {
    wrapper = mount(VltTable, {
      propsData: {
        ...fullTableProps,
        pageSize: 1,
        pagination: true,
        total: 4,
      },
    });
    wrapper
      .findAll('.Vlt-table__pagination a')
      .at(2)
      .trigger('click');
    expect(wrapper.emitted('page-change')).toEqual([[3]]);
  });

  test('can sort "Name" column descending', async () => {
    wrapper = mount(VltTable, {
      propsData: {
        ...fullTableProps,
      },
      scopedSlots: {
        item: '<td>{{ props.item.name }}</td>',
      },
    });
    wrapper
      .findAll('.Vlt-table__col--sortable')
      .at(0)
      .trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('can sort "Name" column ascending', async () => {
    wrapper = mount(VltTable, {
      propsData: {
        ...fullTableProps,
      },
      scopedSlots: {
        item: '<td>{{ props.item.name }}</td>',
      },
    });
    wrapper
      .findAll('.Vlt-table__col--sortable')
      .at(0)
      .trigger('click');
    wrapper
      .findAll('.Vlt-table__col--sortable')
      .at(0)
      .trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly select column and Select All behavior is correct', async () => {
    wrapper = mount(VltTable, {
      propsData: {
        id: 'tableId',
        rows: fullTableProps.rows,
        columns: fullTableProps.columns,
        showCheckboxSelector: true,
        useItemSlot: true,
      },
    });
    expect(wrapper.element).toMatchSnapshot();

    expect(wrapper.vm.isSelectAllChecked).toBeFalsy();
    expect(wrapper.vm.listRowsSelected).toStrictEqual([]);
    expect(wrapper.emitted().selectAll).toBeFalsy();

    // click "Select All" selects all checkboxes
    wrapper.find('input#tableId-headerSelectAllCheckbox').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isSelectAllChecked).toBeTruthy();
    expect(wrapper.vm.listRowsSelected).toStrictEqual([]);
    expect(wrapper.emitted().selectAll).toBeTruthy();
    // click a single box when all are selected de-selects the header "Select All"
    // and adds all other rows to the list of selected rows
    wrapper
      .findAll('input')
      .at(1)
      .trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isSelectAllChecked).toBeFalsy();
    expect(wrapper.vm.listRowsSelected).toStrictEqual([
      // Louis (first row) is absent
      { name: 'Mie', position: 'UX Designer' },
      { name: 'Julien', position: 'Java Developer' },
      { name: 'Nisha', position: 'JavaScript Developer' },
    ]);
    expect(wrapper.emitted().selectRow[0][0]).toStrictEqual({
      isChecked: false,
      listRowsSelected: [
        { name: 'Mie', position: 'UX Designer' },
        { name: 'Julien', position: 'Java Developer' },
        { name: 'Nisha', position: 'JavaScript Developer' },
      ],
    });
  });

  test('renders correctly select column and emits event on single click', async () => {
    wrapper = mount(VltTable, {
      propsData: {
        id: 'tableId',
        rows: fullTableProps.rows,
        columns: fullTableProps.columns,
        showCheckboxSelector: true,
        useItemSlot: true,
      },
    });

    // click a single row's checkbox
    wrapper
      .findAll('input')
      .at(1)
      .trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isSelectAllChecked).toBeFalsy();
    expect(wrapper.vm.listRowsSelected).toStrictEqual([{ name: 'Louis', position: 'Front End Developer' }]);
    expect(wrapper.emitted().selectRow[0][0]).toStrictEqual({
      isChecked: true,
      listRowsSelected: [{ name: 'Louis', position: 'Front End Developer' }],
    });

    // deselect that same row
    wrapper
      .findAll('input')
      .at(1)
      .trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isSelectAllChecked).toBeFalsy();
    expect(wrapper.vm.listRowsSelected).toStrictEqual([]);
    expect(wrapper.emitted().selectRow[1][0]).toStrictEqual({
      isChecked: false,
      listRowsSelected: [],
    });
  });

  test('renders correctly if showing checbkoxes but using rows slot ', async () => {
    wrapper = mount(VltTable, {
      propsData: {
        id: 'tableId',
        rows: fullTableProps.rows,
        columns: fullTableProps.columns,
        showCheckboxSelector: true,
        useItemSlot: false,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly if footers are available', async () => {
    wrapper = mount(VltTable, {
      propsData: {
        id: 'tableId',
        rows: fullTableProps.rows,
        columns: fullTableProps.columns,
        footers: [
          { display: 'UX Designer' },
          { value: '123.56', display: '€ 123.56000' },
        ],
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
