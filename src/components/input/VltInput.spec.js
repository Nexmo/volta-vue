import { shallowMount } from '@vue/test-utils';
import { VltInput } from '..';

describe('vlt-input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltInput);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is textarea', () => {
    wrapper.setProps({ textarea: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits "test" on value change', () => {
    wrapper.find('input').setValue('test');
    expect(wrapper.emitted('input')).toEqual([['test']]);
  });
});
