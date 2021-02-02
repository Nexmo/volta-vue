import { mount } from '@vue/test-utils';
import { VltCheckbox } from '..';

describe('vlt-checkbox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(VltCheckbox, {
      propsData: {
        label: 'Is test ok?',
      },
    });
  });

  test('renders correctly with label "Is test ok?"', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has a "Hello World" tooltip', async () => {
    wrapper.setProps({
      label: 'Is test ok?',
      tooltipTitle: 'Hello World',
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is disabled', async () => {
    wrapper.setProps({
      label: 'Is test ok?',
      disabled: true,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });
});
