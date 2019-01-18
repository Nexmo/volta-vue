import { shallowMount } from '@vue/test-utils';
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
    wrapper = shallowMount(VltTable);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly with two columns, "Name" and "Position"', () => {
    wrapper = shallowMount(VltTable, { propsData: fullTableProps });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('pagination is shown', () => {
    wrapper = shallowMount(VltTable, {
      propsData: {
        ...fullTableProps,
        pageSize: 1,
        pagination: true,
        total: 4,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('"page-change" is emitted with "3" when navigating to page "3"', () => {
    wrapper = shallowMount(VltTable, {
      propsData: {
        ...fullTableProps,
        pageSize: 1,
        pagination: true,
        total: 4,
      },
    });
    wrapper.findAll('.Vlt-table__pagination a').at(2).trigger('click');
    expect(wrapper.emitted('page-change')).toEqual([[3]]);
  });

  test('can sort "Name" column descending', () => {
    wrapper = shallowMount(VltTable, {
      propsData: {
        ...fullTableProps,
      },
      scopedSlots: {
        item: '<td>{{ props.item.name }}</td>',
      },
    });
    wrapper.findAll('.Vlt-table__col--sortable').at(0).trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('can sort "Name" column ascending', () => {
    wrapper = shallowMount(VltTable, {
      propsData: {
        ...fullTableProps,
      },
      scopedSlots: {
        item: '<td>{{ props.item.name }}</td>',
      },
    });
    wrapper.findAll('.Vlt-table__col--sortable').at(0).trigger('click');
    wrapper.findAll('.Vlt-table__col--sortable').at(0).trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  });
});
