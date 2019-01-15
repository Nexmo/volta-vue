import { shallowMount } from '@vue/test-utils';
import { VltIcon } from '..';

describe('vlt-icon', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltIcon, {
      propsData: {
        icon: 'bin',
      },
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is red', () => {
    wrapper.setProps({ color: 'red' });
    expect(wrapper.element).toMatchSnapshot();
  });
});
