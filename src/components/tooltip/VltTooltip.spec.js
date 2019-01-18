import { shallowMount } from '@vue/test-utils';
import { VltTooltip } from '..';

describe('vlt-tooltip', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltTooltip, {
      propsData: {
        title: 'Tooltip Title',
      },
    });
  });

  test('renders correctly with text "Tooltip Test"', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
