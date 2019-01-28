import { shallowMount } from '@vue/test-utils';
import { VltButton, VltComposite, VltInput } from '..';

describe('vlt-composite', () => {
  let wrapper;

  test('renders correctly prended button', () => {
    wrapper = shallowMount(VltComposite, {
      slots: {
        prepend: VltButton,
        default: VltInput,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly appended button', () => {
    wrapper = shallowMount(VltComposite, {
      slots: {
        append: VltButton,
        default: VltInput,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
