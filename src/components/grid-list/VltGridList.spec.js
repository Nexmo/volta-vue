import { mount } from '@vue/test-utils';
import { VltGridList } from '..';

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

const fullGridProps = {
  columns,
  rows,
};

describe('vlt-grid-list', () => {
  let wrapper;

  test('renders empty state', () => {
    wrapper = mount(VltGridList);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly with two columns, "Name" and "Position"', () => {
    wrapper = mount(VltGridList, { propsData: fullGridProps });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('pagination is shown', () => {
    wrapper = mount(VltGridList, {
      propsData: {
        ...fullGridProps,
        pageSize: 1,
        pagination: true,
        total: 4,
      },
    });
    expect(wrapper.find('.Vlt-table__pagination')).toMatchSnapshot();
  });

  test('"page-change" is emitted with "3" when navigating to page "3"', () => {
    wrapper = mount(VltGridList, {
      propsData: {
        ...fullGridProps,
        pageSize: 1,
        pagination: true,
        total: 4,
      },
    });
    wrapper.findAll('.Vlt-table__pagination a').at(2).trigger('click');
    expect(wrapper.emitted('page-change')).toEqual([[3]]);
  });
});
