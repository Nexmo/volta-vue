import { shallowMount } from '@vue/test-utils';
import { VltSwitch } from '..';

describe('vlt-switch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltSwitch);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is red', async () => {
    wrapper.setProps({ red: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('can be checked', async () => {
    wrapper.find('input').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('input')).toEqual([[true]]);
  });
});
