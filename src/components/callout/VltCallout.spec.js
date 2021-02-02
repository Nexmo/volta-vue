import { mount } from '@vue/test-utils';
import { VltCallout } from '..';

describe('vlt-callout', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(VltCallout);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is type critical', async () => {
    wrapper.setProps({ type: 'critical' });
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
