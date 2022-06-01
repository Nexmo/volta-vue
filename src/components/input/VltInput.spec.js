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

  test('is textarea', async () => {
    wrapper.setProps({ textarea: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits "test" on value change', async () => {
    await wrapper.find('input').setValue('test');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('input')[0]).toEqual(['test']);
  });
});
