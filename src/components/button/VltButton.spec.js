import { mount } from '@vue/test-utils';
import { VltButton } from '..';

describe('vlt-button', () => {
  test('renders correctly', () => {
    const wrapper = mount(VltButton);
    expect(wrapper.element).toMatchSnapshot();
  });

  test.each([
    ['icon', 'bin'],
    ['primary', true],
    ['id', 'test-button'],
    ['disabled', true],
    ['spinner', true],
    ['spinner-white', true],
  ])('prop %s is set to %s', (prop, value) => {
    const wrapper = mount(VltButton, {
      context: {
        props: {
          [prop]: value,
        },
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
