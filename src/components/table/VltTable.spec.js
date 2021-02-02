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
});
