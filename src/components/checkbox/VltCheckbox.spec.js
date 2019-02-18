import { shallowMount } from '@vue/test-utils';
import { VltCheckbox } from '..';

describe('vlt-checkbox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltCheckbox, {
      propsData: {
        label: 'Is test ok?',
      },
    });
  });

  test('renders correctly with label "Is test ok?"', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has a "Hello World" tooltip', () => {
    wrapper.setProps({
      label: 'Is test ok?',
      tooltipTitle: 'Hello World',
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is disabled', () => {
    wrapper.setProps({
      label: 'Is test ok?',
      disabled: true,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
