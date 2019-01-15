import { shallowMount } from '@vue/test-utils';
import { VltBadge } from '..';

describe('vlt-badge', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltBadge);
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

  test('is dismissable', () => {
    wrapper.setProps({ dismissable: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is dismissed', async () => {
    wrapper.setProps({ dismissable: true });
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('dismissed')).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });
});
