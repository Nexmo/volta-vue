import { mount } from '@vue/test-utils';
import { VltFlash } from '..';

describe('vlt-flash', () => {
  let wrapper;

  beforeEach(() => {
    jest.useFakeTimers();
    wrapper = mount(VltFlash);
  });

  afterEach(() => {
    jest.runAllTimers();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is type critical', async () => {
    wrapper.setProps({ type: 'critical' });
    await wrapper.vm.$nextTick();

    expect(wrapper.element).toMatchSnapshot();
  });

  test('is visible', async () => {
    wrapper.setProps({ visible: true });
    await wrapper.vm.$nextTick();

    expect(wrapper.element).toMatchSnapshot();
    await wrapper.vm.$nextTick();
    jest.runAllTimers();
    expect(wrapper.emitted().dismissed).toBeTruthy();
  });

  test('is dismissable', async () => {
    wrapper.setProps({ dismissable: true });
    await wrapper.vm.$nextTick();

    expect(wrapper.element).toMatchSnapshot();
  });

  test('can be dismissed', async () => {
    wrapper.setProps({ dismissable: true });
    await wrapper.vm.$nextTick();
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('dismissed')).toBeTruthy();
  });

  test('is a bottom flash', async () => {
    wrapper.setProps({ bottom: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is a small flash', async () => {
    wrapper.setProps({ small: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });
});
