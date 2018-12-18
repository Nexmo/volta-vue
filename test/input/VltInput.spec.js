import { shallowMount } from '@vue/test-utils';
import { VltInput } from '../../src/components';

describe('vlt-input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltInput);
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is textarea', () => {
    wrapper.setProps({ teaxtarea: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits "test" on value change', () => {
    wrapper.find('input').setValue('test');
    expect(wrapper.emitted('input')).toEqual([['test']]);
  });
});
