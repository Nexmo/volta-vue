import { mount } from '@vue/test-utils';
import { VltBadge } from '..';

describe('vlt-badge', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(VltBadge);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is red', async () => {
    wrapper.setProps({ color: 'red' });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is dismissable', async () => {
    wrapper.setProps({ dismissable: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is dismissed', async () => {
    wrapper.setProps({ dismissable: true });
    await wrapper.vm.$nextTick();
    wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('dismissed')).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });
});
