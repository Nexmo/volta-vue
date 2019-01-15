import { shallowMount } from '@vue/test-utils';
import { VltSwitch } from '..';

describe('vlt-switch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltSwitch);
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is red', () => {
    wrapper.setProps({ red: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('can be checked', () => {
    wrapper.find('input').trigger('click');
    expect(wrapper.emitted('input')).toEqual([[true]]);
  });
});
