import { shallowMount } from '@vue/test-utils';
import { VltSelect } from '..';

describe('vlt-select', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltSelect, {
      propsData: {
        val: undefined,
        options: ['red', 'yellow', 'blue'],
      },
    });
  });

  test('renders correctly with options "red", "yellow", "blue"', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('selected value is "blue"', () => {
    wrapper
      .findAll('option')
      .at(2)
      .setSelected();
    expect(wrapper.emitted('input')).toEqual([['blue']]);
  });
});
