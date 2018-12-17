import { shallowMount } from '@vue/test-utils';
import { VltField } from '../../src/components';

describe('vlt-field', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltField);
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has label "Test field"', async () => {
    wrapper.setProps({ label: 'Test field' });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is optional', async () => {
    wrapper.setProps({ optional: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is big', () => {
    wrapper.setProps({ big: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is big with label "Test field"', () => {
    wrapper.setProps({
      big: true,
      label: 'Test field',
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has tooltip "Hello World"', async () => {
    wrapper.setProps({
      label: 'Test field',
      tooltip: 'Hello World',
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has error "something is wrong"', () => {
    wrapper.setProps({ error: 'something is wrong' });
    expect(wrapper.element).toMatchSnapshot();
  });
});
