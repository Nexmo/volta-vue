import { shallowMount } from '@vue/test-utils';
import { VltCallout } from '../../src/components';

describe('vlt-callout', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltCallout);
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is type critical', () => {
    wrapper.setProps({ type: 'critical' });
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
