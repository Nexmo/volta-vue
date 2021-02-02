import { mount } from '@vue/test-utils';
import { VltField } from '..';

describe('vlt-field', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(VltField);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has label "Test field"', async () => {
    wrapper.setProps({ label: 'Test field' });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is optional', async () => {
    wrapper.setProps({ optional: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is big', async () => {
    wrapper.setProps({ big: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is big with label "Test field"', async () => {
    wrapper.setProps({
      big: true,
      label: 'Test field',
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has tooltip "Hello World"', async () => {
    wrapper.setProps({
      label: 'Test field',
      tooltip: 'Hello World',
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has error "something is wrong"', async () => {
    wrapper.setProps({ error: 'something is wrong' });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });
});
