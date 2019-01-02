import { shallowMount } from '@vue/test-utils';
import { VltMargin } from '../../src/components';

describe('vlt-margin', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltMargin);
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders with a top margin of 2', () => {
    wrapper.setProps({ top: 2 });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders with a top margin of 2 on small screens', () => {
    wrapper.setProps({ sTop: 2 });
    expect(wrapper.element).toMatchSnapshot();
  });
});
