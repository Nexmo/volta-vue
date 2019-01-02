import { shallowMount } from '@vue/test-utils';
import { VltTooltip } from '../../src/components';

describe('vlt-tooltip', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltTooltip, {
      propsData: {
        title: 'Tooltip Title',
      },
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly with text "Tooltip Test"', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
